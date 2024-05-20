import { Injectable, Logger } from '@nestjs/common';
import { AtmLocation } from './atm.constant';

@Injectable()
export class NearestAtmService {
    private readonly logger = new Logger(NearestAtmService.name);

    async findNearestAtm(latitude: number, longitude: number, radiusKm: number = 1) {
        const nearestAtm = AtmLocation.filter(atm => {
            const atmLatitude = atm.latitude;
            const atmLongitude = atm.longitude;
            const distance = this.calculateDistance(latitude, longitude, atmLatitude, atmLongitude);
            return distance <= radiusKm;
        });
        return nearestAtm;
    }

    private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
        const R = 6371; // km
        const dLat = this.toRad(lat2 - lat1);
        const dLon = this.toRad(lon2 - lon1);
        const lat1Rad = this.toRad(lat1);
        const lat2Rad = this.toRad(lat2);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return d;
    }

    private toRad(value: number) {
        return value * Math.PI / 180;
    }

}

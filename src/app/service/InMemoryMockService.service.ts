import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMockService implements InMemoryDbService {
    createDb() {
        const sampleJSON = [
            {
                'name': 'Dunlap Hubbard',
                'gender': 'male',
                'phone': '+1 (890) 543-2508',
            },
            {
                'name': 'Kirsten Sellers',
                'gender': 'female',
                'phone': '+1 (831) 564-2190',
            },
            {
                'name': 'Acosta Robbins',
                'gender': 'male',
                'phone': '+1 (882) 441-3367',
            }
        ];
        return { sampleJSON };
    }
}

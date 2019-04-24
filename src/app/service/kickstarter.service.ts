import { MockData } from './mockData';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class KickStarterService {

    private api = 'api/sampleJSON';  // URL to web api

    constructor(
        private http: HttpClient) { }

    getData() {
        return this.http.get(this.api);
    }

    insertData(mockData: MockData) {
        console.log(mockData);
        return this.http.post<MockData>(this.api, mockData, httpOptions);
    }
}

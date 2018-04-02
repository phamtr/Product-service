import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IpService {
    constructor(private http: Http) {}

    getIp(): Promise<string> {
        return this.http.get('http://ip.jsontest.com/')
        .toPromise()
        .then(res => res.json()) // res => res.text
        .then(resJSON => resJSON.ip);
    }
}

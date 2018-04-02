import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class WordService {
    constructor(private http: Http) {}

    getAllWords() {
        return this.http.get('http://localhost:3000/word')
        .toPromise()
        .then(res => res.json());
    }

    createNewWord(en, vn) {
        const body = JSON.stringify({ en, vn });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/word', body, { headers })
        .toPromise()
        .then(res => res.json());
    }

    removeWord(id) {
        return this.http.delete('http://localhost:3000/word/' + id)
        .toPromise()
        .then(res => res.json());
    }
}

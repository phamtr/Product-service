import { Component } from '@angular/core';
import { WordService } from './word.service';

@Component({
    template: `
        <div>Words</div>
        <div>
            <input placeholder="English" [(ngModel)]="txtEn" />
            <br><br>
            <input placeholder="Vietnamese" [(ngModel)]="txtVn" />
            <br><br>
            <button (click)="addWord();">Add</button>
        </div>
        <div *ngFor="let word of words">
            <h3>{{word.en}}</h3>
            <p>{{word.vn}}</p>
            <button (click)="removeWord(word._id)">Xoa</button>
        </div>
    `,
    selector: 'app-words',
    providers: [WordService]
})

export class WordsComponent {
    words = [];
    txtEn = '';
    txtVn = '';
    constructor(private wordService: WordService) {
        this.wordService.getAllWords()
        .then(words => this.words = words);
    }

    removeWord(id) {
        this.wordService.removeWord(id)
        .then(() => {
            const index = this.words.findIndex(word => word._id === id);
            this.words.splice(index, 1);
        });
    }

    addWord() {
        this.wordService.createNewWord(this.txtEn, this.txtVn)
        .then(newWord => this.words.unshift(newWord));
    }
}

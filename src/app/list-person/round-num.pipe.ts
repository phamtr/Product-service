import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

export class RoundNumPipe implements PipeTransform {
    transform(value: number, isUpper: boolean, adding: number) {
        value += adding;
        if (isUpper) return Math.ceil(value);
        return Math.floor(value);
    }
}

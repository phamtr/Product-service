import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './list-person.component';
@Pipe({ name: 'sort' })

export class SortPipe implements PipeTransform {
    transform(arrPerson: Person[], prop) {
        return arrPerson.sort((p1, p2) => {
            if (p1[prop] === p2[prop]) return 0;
            if (p1[prop] > p2[prop]) return 1;
            return -1;
        });
    }
}

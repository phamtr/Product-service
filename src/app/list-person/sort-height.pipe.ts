import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './list-person.component';
@Pipe({ name: 'sortHeight' })

export class SortHeightPipe implements PipeTransform {
    transform(arrPerson: Person[]) {
        return arrPerson.sort((p1, p2) => p1.height - p2.height);
    }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './list-person.component';
@Pipe({ name: 'minAge' })

export class MinAgePipe implements PipeTransform {
    transform(arrPerson: Person[], minAge: number) {
        return arrPerson.filter(person => person.age >= minAge);
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})

export class ListPersonComponent {
  sortPropName = 'name';
  arrPerson: Person[] = [
    { name: 'Ti', age: 15, height: 80, weight: 120 },
    { name: 'Teo', age: 10, height: 100, weight: 130 },
    { name: 'Tun', age: 20, height: 90, weight: 110 },
  ];
}

export interface Person {
  name: string;
  age: number;
  height: number;
  weight: number;
}

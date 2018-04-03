import { Component, OnInit } from '@angular/core';
import  { CalService } from '../cal.service';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css'],
  providers: [ CalService]
})
export class LoginCompanyComponent implements OnInit {

  constructor(private calService: CalService) { }

  ngOnInit() {
    this.calService.SignupCompany('test1@test.com', 'Ttester')
    .then(user => console.log(user))
    .catch(err => console.log(err))
  }

}

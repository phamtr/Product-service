import { Component } from '@angular/core';
import { IpService } from './ip.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IpService]
})
export class AppComponent {
  title = 'app';
  myIp = '...';
  constructor(private ipService: IpService) {
    this.ipService.getIp()
    .then(x => this.myIp = x);
  }
}

// export class AppComponent {
//   title = 'app';
//   myIp = '...';
//   constructor(private http: Http) {
//     this.http.get('http://ip.jsontest.com/')
//     .toPromise()
//     .then(res => res.json())
//     .then(resJSON => this.myIp = resJSON.ip)
//     .catch(err => console.log(err));
//   }
// }



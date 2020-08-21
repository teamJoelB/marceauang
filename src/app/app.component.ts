import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marceau';
  user;
  constructor(private http: HttpClient, private route: Router) { }

  onLogin(value) {

   // console.log(value);

    this.http.post('http://localhost:8085/login', value).subscribe(data => {
      this.user = data;

     // console.log(data);
      this.verifCo(this.user);
    }, err => {
      console.log(err);
    });
  }

  verifCo(user) {
    if (user != null) { this.route.navigateByUrl('memo'); } else { console.log('identifiant pas bon'); }
  }
}

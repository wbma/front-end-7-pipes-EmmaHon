import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class MediaService {

  status: string;
  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  username: string;
  password: string;
  email: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  public login() {
    console.log('username: ' + this.username);
    console.log('pwd: ' + this.password);
    console.log('mail: ' + this.email);


    const body = {
      username: this.username,
      password: this.password,
      email: this.email,
    };

    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    this.http.post(this.apiUrl + '/login', body, settings).subscribe(response => {
      console.log(response['token']);
      localStorage.setItem('token', response['token']);
      this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
      this.status = error.error.message;
    });
  }
  register(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }
  getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    return this.http.get(this.apiUrl + '/users/user', settings);
  }
  upload(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    return this.http.post(this.apiUrl + '/media', formData, settings);
  }
}

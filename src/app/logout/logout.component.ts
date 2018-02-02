import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public mediaService: MediaService, private router: Router) {
  }

  ngOnInit() {
    if (localStorage.removeItem('token') !== null) {
      this.mediaService.getUserData().subscribe(response => {
      }, (error: HttpErrorResponse) => {
        this.router.navigate(['login']);
      });
    }
  }
}

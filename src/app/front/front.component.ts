import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';
// import {HttpErrorResponse} from '@angular/common/http';
// import {start} from 'repl';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  printThis: string;
  mediaFiles: any;

  constructor(private mediaService: MediaService, private router: Router) {
  }

  ngOnInit() {
    /*
    this.mediaService.getUserData().subscribe( response => {
      console.log('Welcome ' + response['full_name']);
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.router.navigate(['login']);
    });
  }
}*/
    this.printThis = this.mediaService.test;

    this.mediaService.getMediaFiles(0, 10).subscribe(result => {
      this.mediaFiles = result;
    }, err => {
      console.log(err);
    });
  }
}

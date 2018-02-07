import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Media} from '../interface/media';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;
  media: Media = {
    title: '',
    description: '',
  };

  constructor (public mediaService: MediaService) {
}
  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  startUpload() {
    // create FormData-object
    // add title and description to FormData object
    // add file to FormData object
    // send FormData object to API
    console.log(this.media);

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    console.log(formData);

    this.mediaService.upload(formData).subscribe(data => {
      console.log(data);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

  }

  ngOnInit() {
  }

}

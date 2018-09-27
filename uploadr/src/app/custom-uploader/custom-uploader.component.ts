import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-custom-uploader',
  templateUrl: './custom-uploader.component.html',
  styleUrls: ['./custom-uploader.component.css']
})
export class CustomUploaderComponent implements OnInit {
  uploadqueue: File[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onFileSelected(filesdata) {
    Object.keys(filesdata).forEach(element => {
      this.uploadqueue.push(filesdata[element]);
    });
    console.log(this.uploadqueue);
  }

  clearFiles() {
    this.uploadqueue = [];
  }

  uploadFiles() {
    if (this.uploadqueue.length > 0) {
      this.uploadqueue.forEach((file: File) => {
        const formData: FormData = new FormData();
        formData.append('uploadfile[]', file, file.name);
        const headers = new HttpHeaders({
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json'
        });
        this.http
          .post<any>('api_url_goes_here', formData, {
            headers
          })
          .subscribe(console.log, console.log);
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FileUploader, Headers } from 'ng2-file-upload';

@Component({
  selector: 'app-valor-uploader',
  templateUrl: './valor-uploader.component.html',
  styleUrls: ['./valor-uploader.component.css']
})
export class ValorUploaderComponent implements OnInit {
  uploader: FileUploader;
  text: string;

  constructor() {}

  ngOnInit() {
    const headers: Headers[] = [];
    headers.push({ name: 'timeheader', value: '' + new Date().getTime() });
    this.uploader = new FileUploader({
      url: 'http://localhost:3000/api/posts',
      additionalParameter: {
        text: '' + new Date().getTime()
      },
      headers: headers
    });
  }

  clearFiles() {
    this.uploader.clearQueue();
  }

  uploadOneByOne() {
    let optns = this.uploader.options;
    optns = {
      ...optns,
      additionalParameter: {
        text: this.text
      }
    };
    this.uploader.setOptions(optns);

    this.uploader.queue.forEach(fileItem => {
      const formDt = [];
      formDt.push({ time: new Date().getTime() });
      fileItem.formData = formDt;
      fileItem.upload();
    });
  }

  uploadFilenameChange() {
    this.uploader.queue.forEach(fileItem => {
      const file = fileItem.file;
      console.log(file.name);
      file.name = this.text + '_' + file.name;
      fileItem.upload();
    });
  }
}

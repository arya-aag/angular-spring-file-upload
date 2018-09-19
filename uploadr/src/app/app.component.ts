import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploadqueue: File[] = [];

  onFileSelected(filesdata) {
    Object.keys(filesdata).forEach(element => {
      this.uploadqueue.push(filesdata[element]);
    });
    console.log(this.uploadqueue);
  }

  clearFiles() {
    this.uploadqueue = [];
  }

  uploadFiles() {}
}

import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filenames: string[] = [];

  onFileSelected(filesdata) {
    console.log(filesdata);
    const files: File[] = [];
    Object.keys(filesdata).forEach(element => {
      files.push(filesdata[element]);
    });
    this.filenames = files.map(el => el.name);
  }
}

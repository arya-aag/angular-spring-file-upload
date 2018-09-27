import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { UploadrSelectDirective } from './custom-uploader/uploadr-select.directive';
import { ValorUploaderComponent } from './valor-uploader/valor-uploader.component';
import { CustomUploaderComponent } from './custom-uploader/custom-uploader.component';

const routes: Routes = [
  { path: 'valor', component: ValorUploaderComponent },
  { path: '', component: CustomUploaderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadrSelectDirective,
    ValorUploaderComponent,
    CustomUploaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

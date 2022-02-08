import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './component/students/students.component';
import { StudentsAsyncComponent } from './component/students-async/students-async.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsAsyncComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

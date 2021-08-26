import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DefaultModule } from './layout/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
declarations: [
AppComponent,
],
imports: [
BrowserModule,
AppRoutingModule,
DefaultModule,
HttpClientModule,
FormsModule,
MatSelectModule, BrowserAnimationsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
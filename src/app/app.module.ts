import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';
import {HttpClientModule} from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { TestComponent } from './test/test.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule, MatFormFieldModule,MatPaginatorModule,
  MatInputModule,MatTooltipModule,MatSelectModule,MatSortModule, MatRippleModule } from '@angular/material' 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PipePipe } from './pipe.pipe';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    TestComponent,
    PipePipe,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatRippleModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

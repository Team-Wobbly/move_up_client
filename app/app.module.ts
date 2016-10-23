import {RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './src/app.component';
import { DashboardComponent }   from './src/dashboard/dashboard.component';
import { HomeComponent }   from './src/home/home.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, RouterModule ],
  declarations: [ AppComponent, DashboardComponent, HomeComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

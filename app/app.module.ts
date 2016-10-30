import {RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './src/app.component';
import { HomeComponent }   from './src/home/home.component';
import { ActivityComponent }  from './src/activity/activity.component';
import { GalleryComponent }  from './src/gallery/gallery.component';
import { TimetableComponent }  from './src/timetable/timetable.component';
import { PriceComponent }  from './src/price/price.component';
import { ResourcesComponent }  from './src/resources/resources.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, RouterModule ],
  declarations: [ AppComponent, HomeComponent, ActivityComponent, GalleryComponent, TimetableComponent, PriceComponent, ResourcesComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

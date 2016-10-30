import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './src/home/home.component';
import { ActivityComponent }  from './src/activity/activity.component';
import { GalleryComponent }  from './src/gallery/gallery.component';
import { TimetableComponent }  from './src/timetable/timetable.component';
import { PriceComponent }  from './src/price/price.component';
import { ResourcesComponent }  from './src/resources/resources.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'price', component: PriceComponent },
  { path: 'resources', component: ResourcesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

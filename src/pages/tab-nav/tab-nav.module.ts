import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabNavPage } from './tab-nav';

@NgModule({
  declarations: [
    TabNavPage,
  ],
  imports: [
    IonicPageModule.forChild(TabNavPage),
  ]
})
export class TabNavPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVideoProductionPage } from './add-video-production';

@NgModule({
  declarations: [
    AddVideoProductionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVideoProductionPage),
  ],
})
export class AddVideoProductionPageModule {}

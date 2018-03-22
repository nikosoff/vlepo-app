import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddVideoProductionPage } from '../pages/add-video-production/add-video-production';
import { EditVideoProductionPage } from '../pages/edit-video-production/edit-video-production';
import { VideoProductionService } from '../services/video-production.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddVideoProductionPage,
    EditVideoProductionPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddVideoProductionPage,
    EditVideoProductionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoProductionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

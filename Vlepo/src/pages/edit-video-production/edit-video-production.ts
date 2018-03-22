import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoProduction } from '../../models/video-production';
import { VideoProductionService } from '../../services/video-production.service';

@IonicPage()
@Component({
  selector: 'page-edit-video-production',
  templateUrl: 'edit-video-production.html',
})
export class EditVideoProductionPage {

  videoProduction: VideoProduction;
  callback: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private videoProductionService: VideoProductionService) {
                this.videoProduction = navParams.get('videoProduction');
                this.callback = navParams.get('callback');
  }

  updateVideoProduction(videoProduction: VideoProduction) {
    videoProduction = new VideoProduction(videoProduction);
    this.videoProductionService.updateVideoProduction(videoProduction)
    .subscribe(videoProductions => {
        this.callback(videoProductions);
        this.navCtrl.pop();
    });

  }



}

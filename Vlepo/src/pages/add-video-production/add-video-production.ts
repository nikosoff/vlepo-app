import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoProduction } from '../../models/video-production';
import { VideoProductionService } from '../../services/video-production.service';

@IonicPage()
@Component({
  selector: 'page-add-video-production',
  templateUrl: 'add-video-production.html',
})
export class AddVideoProductionPage {

  videoProduction: VideoProduction;
  callback: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private videoProductionService: VideoProductionService) {
                this.videoProduction = new VideoProduction({"title":"", "type":"Ταινία", "state":"notSeenYet"});
                this.callback = navParams.get('callback');
  }

  saveVideoProduction(videoProduction: VideoProduction) {
    videoProduction = new VideoProduction(videoProduction);
    this.videoProductionService.saveVideoProduction(videoProduction)
    .subscribe(videoProductions => {
      this.callback(videoProductions);
      this.navCtrl.pop();
    });
  }


}

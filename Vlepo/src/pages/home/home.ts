import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoProduction } from '../../models/video-production';
import { AddVideoProductionPage } from '../add-video-production/add-video-production';
import { EditVideoProductionPage } from '../edit-video-production/edit-video-production';
import { VideoProductionService } from '../../services/video-production.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  videoProductions: VideoProduction[] = [];

  constructor(public navCtrl: NavController,
              private videoProductionService: VideoProductionService) {
                //this.state = "seen";
  }

  getVideoProductions(): void {
    this.videoProductionService.getVideoProductions()
    .subscribe(videoProductions => this.videoProductions = videoProductions);
  }

  ionViewDidLoad(): void {
    this.getVideoProductions();
  }

  goToAddVideoProductionPage(): void {
    var callback;
    this.navCtrl.push(AddVideoProductionPage, {'callback': callback = (videoProductions) => {
          this.videoProductions = videoProductions;
    }});
  }

  goToEditVideoProductionPage(videoProduction: VideoProduction): void {
    videoProduction = new VideoProduction(videoProduction);
    var callback;
    this.navCtrl.push(EditVideoProductionPage, {'videoProduction': videoProduction , 'callback': callback = (videoProductions) => {
        this.videoProductions = videoProductions;
    }});
  }

  deleteVideoProduction(videoProduction: VideoProduction): void {
    this.videoProductionService.deleteVideoProduction(videoProduction)
    .subscribe(videoProductions => {
        this.videoProductions = videoProductions;
    });
  }

  changeStateVideoProduction(videoProduction: VideoProduction): void {
    this.videoProductionService.changeStateVideoProduction(videoProduction)
    .subscribe(videoProductions => {
      this.videoProductions = videoProductions;
    });

  }

}

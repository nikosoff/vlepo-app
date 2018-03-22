import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { VideoProduction } from '../models/video-production';

@Injectable()
export class VideoProductionService {

  videoProductions: VideoProduction[] = [];
  key: string = "video-productions";

  constructor(private storage: Storage) {
    this.storage.get(this.key)
    .then(videoResources => {
      if (videoResources == null) {
        this.storage.set(this.key, this.videoProductions);
      }
    });
  }

  public getVideoProductions(): Observable<VideoProduction[]> {
    return fromPromise(this.storage.get(this.key));
  }

  public saveVideoProduction(videoProduction: VideoProduction): Observable<VideoProduction> {
      var promise = this.storage.get(this.key);
      promise.then(videoProductions => {
        if (videoProductions == null)
          videoProductions = []
        videoProductions.unshift(videoProduction);
        this.storage.set(this.key, videoProductions);
      });
      return fromPromise(promise);
  }

  public updateVideoProduction(videoProduction: VideoProduction): Observable<VideoProduction[]> {
    var promise = this.storage.get(this.key);
    promise.then(videoProductions => {
      var resultedVideoProduction = videoProductions.find(production => production.id == videoProduction.id);
      resultedVideoProduction.title = videoProduction.title;
      resultedVideoProduction.type = videoProduction.type;
      resultedVideoProduction.url = videoProduction.url;
      this.storage.set(this.key, videoProductions);
    });
    return fromPromise(promise);
  }

  public deleteVideoProduction(videoProduction: VideoProduction): Observable<VideoProduction[]> {
    var promise = this.storage.get(this.key);
    promise.then(videoProductions => {
      var index = videoProductions.indexOf(videoProductions.find(production => production.id == videoProduction.id));
      videoProductions.splice(index,1);
      this.storage.set(this.key, videoProductions);
    });
    return fromPromise(promise);
  }

  public changeStateVideoProduction(videoProduction: VideoProduction): Observable<VideoProduction[]> {
    var promise = this.storage.get(this.key);
    promise.then(videoProductions => {
      var index = videoProductions.indexOf(videoProductions.find(production => production.id == videoProduction.id));
      var resultedProduction = videoProductions.splice(index,1)[0];
      resultedProduction.state = "seen";
      videoProductions.unshift(new VideoProduction(resultedProduction));
      this.storage.set(this.key, videoProductions);
    });
    return fromPromise(promise);
  }

}

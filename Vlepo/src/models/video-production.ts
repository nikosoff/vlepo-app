export class VideoProduction {

  public id: number;
  public title: string;
  public type: string;
  public state: string;
  public url: string;

  constructor(videoProduction: any) {

    this.title = videoProduction.title;
    this.type = videoProduction.type;
    this.state = videoProduction.state;
    this.url = this.getUrl(videoProduction.title);
    this.id = videoProduction.id == null? Date.now():videoProduction.id;

  }

  //We make a request to google with query title+Κριτικ΄ή
  //Ex. if title="The Amazing Spiderman"
  //then return https://www.google.gr/search?q=The+Amazing+Spiderman+Κριτικ΄ή
  private getUrl(title: string): string {
    console.log(title);
    title = title.trim().replace(/\s+/g, "+") + "+Κριτική";
    return "https://www.google.gr/search?q=" + title;
  }

}


/*
constructor(title: string="", type: string="", state: string="") {
  this.title = title;
  this.type = type;
  this.state = state;
  this.url = this.getUrl(this.title);
  this.id = Date.now();
}
*/

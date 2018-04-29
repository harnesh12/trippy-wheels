import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from 'ngx-image-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('slideShowGallery') slideShowGallery: NgxImageGalleryComponent;

  conf: GALLERY_CONF = {
    backdropColor: 'rgb(250, 250, 250)',
    imageOffset: '0px',
    showCloseControl: false,
    showDeleteControl: false,
    showImageTitle: false,
    inline: true,
    showArrows: true
  };

  slideShowConf: GALLERY_CONF = {
    backdropColor: 'rgb(250, 250, 250)',
    imageOffset: '0px',
    showCloseControl: false,
    showDeleteControl: false,
    showImageTitle: true,
    inline: false,
    showArrows: false
  };

  slideshowImages = [
    {url: 'assets/logo.png'},
    {url: 'assets/locations/1.jpg', title: 'Napping under a tree, somewhere in Coorg'},
    {url: 'assets/locations/2.jpg', title: 'beach in Mangalore'},
    {url: 'assets/locations/3.jpg', title: 'Party mode on at our base camp in Sakleshpur'},
    {url: 'assets/locations/4.jpg', title: 'Endless hills of Sakleshpur'},
    {url: 'assets/locations/5.jpg', title: 'Keep calm and caravan on!'},
    {url: 'assets/locations/6.jpg', title: 'Off the beaten trail in Coorg'},
    {url: 'assets/locations/7.jpg', title: 'Waking up to a magical sunrise in Sakleshpur'},
  ];

  caravanImages: GALLERY_IMAGE[] = [
    {
      url: 'assets/interiors/1.jpg',
      altText: '1.jpg',
      title: 'Home Stays 1',
      thumbnailUrl: 'assets/interiors/thumbnails/1.jpg'
    },
    {
      url: 'assets/interiors/2.jpg',
      altText: '2.jpg',
      title: 'Home Stays 2',
      thumbnailUrl: 'assets/interiors/thumbnails/2.jpg'
    },
    {
      url: 'assets/interiors/3.jpg',
      altText: '3.jpg',
      title: 'Home Stays 3',
      thumbnailUrl: 'assets/interiors/thumbnails/3.jpg'
    },
    {
      url: 'assets/interiors/4.jpg',
      altText: '4.jpg',
      title: 'Home Stays 4',
      thumbnailUrl: 'assets/interiors/thumbnails/4.jpg'
    }
  ];

  homestayImages: GALLERY_IMAGE[] = [
    {
      url: 'assets/homestays/1.jpg',
      altText: '1.jpg',
      title: 'Home Stays 1',
      thumbnailUrl: 'assets/homestays/thumbnails/1.jpg'
    },
    {
      url: 'assets/homestays/2.jpg',
      altText: '2.jpg',
      title: 'Home Stays 2',
      thumbnailUrl: 'assets/homestays/thumbnails/2.jpg'
    },
    {
      url: 'assets/homestays/3.jpg',
      altText: '3.jpg',
      title: 'Home Stays 3',
      thumbnailUrl: 'assets/homestays/thumbnails/3.jpg'
    },
    {
      url: 'assets/homestays/4.jpg',
      altText: '4.jpg',
      title: 'Home Stays 4',
      thumbnailUrl: 'assets/homestays/thumbnails/4.jpg'
    }
  ];

  ngAfterViewInit() {
    this.slideShowGallery.conf = this.slideShowConf;
    setInterval(this.cycleImages, 3500);
  }

  private cycleImages = () => {
    if(this.slideShowGallery.activeImageIndex === this.slideshowImages.length - 1) {
      this.slideShowGallery.activeImageIndex = 0;
    } else {
      this.slideShowGallery.next();
    }
  }
}

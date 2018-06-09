import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';
import {
  AdvancedLayout,
  Image,
  PlainGalleryConfig,
  PlainGalleryStrategy
} from "@ks89/angular-modal-gallery";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Portfolio', ru: 'Портфолио'};

  images: Image[] = [
    new Image(
      1,
      {
        img: '/dist/assets/images/portfolio/7.jpg',
        description: null
      }
    ),
    new Image(
      2,
      {
        img: '/dist/assets/images/portfolio/8.jpg',
        description: null
      }
    ),
    new Image(
      4,
      {
        img: '/dist/assets/images/portfolio/2.jpg',
        description: null
      }
    ),
    new Image(
      3,
      {
        img: '/dist/assets/images/portfolio/1.jpg',
        description: null
      }
    ),

    new Image(
      5,
      {
        img: '/dist/assets/images/portfolio/3.jpg',
        description: null
      }
    ),
    new Image(
      6,
      {
        img: '/dist/assets/images/portfolio/4.jpg',
        description: null
      }
    ),
    new Image(
      7,
      {
        img: '/dist/assets/images/portfolio/5.jpg',
        description: null
      }
    ),
    new Image(
      8,
      {
        img: '/dist/assets/images/portfolio/6.jpg',
        description: null
      }
    ),

  ];

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };
  openImageModalRow(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}


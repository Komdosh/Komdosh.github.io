import {Component, ViewChild} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';
import {GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent} from 'ngx-image-gallery';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent extends LanguageWrapper {

  @ViewChild(NgxImageGalleryComponent, {static: true}) ngxImageGallery: NgxImageGalleryComponent;

  sectionName: Translation = {en: 'Portfolio', ru: 'Портфолио'};

  conf: GALLERY_CONF = {
    showDeleteControl: false,
    showImageTitle: false,
    inline: true,
    showCloseControl: false,
    backdropColor: 'rgba(0,0,0,0.0)', // gallery backdrop (background) color (default rgba(13,13,14,0.85))
    reactToMouseWheel: false,
    reactToRightClick:false,
  };

  baseHref = environment.baseHref;
  portfolioImagesPath = `${this.baseHref}/assets/images/portfolio`;

  images: GALLERY_IMAGE[] = [];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
    this.createImagesList();
  }

  createImagesList() {
    const imgNums = [10, 9, 7, 8, 6, 2, 1, 3, 4, 5];
    const imgLength = imgNums.length;

    for (let i = 0; i < imgLength; ++i) {
      this.images.push({
        url: `${this.portfolioImagesPath}/${imgNums[i]}.jpg`,
        extUrl: `${this.portfolioImagesPath}/${imgNums[i]}.jpg`,
      });
    }
  }
}


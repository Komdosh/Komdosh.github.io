import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Portfolio', ru: 'Портфолио'};

  baseHref = environment.baseHref;
  portfolioImagesPath = `${this.baseHref}/assets/images/portfolio`;

  images: string[] = [];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
    this.createImagesList();
  }

  createImagesList() {
    const imgNums = [10, 9, 7, 8, 6, 2, 1, 3, 4, 5];
    const imgLength = imgNums.length;

    for (let i = 0; i < imgLength; ++i) {
      this.images.push(
        `${this.portfolioImagesPath}/${imgNums[i]}.jpg`
      );
    }
  }
}


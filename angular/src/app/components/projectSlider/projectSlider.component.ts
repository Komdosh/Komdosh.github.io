import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';


class ProjectItem {
  style: any;
  name: Translation;
  description: Translation;
  role: Translation;
  link: string;
  buttonTitle: string;
  imgUrl: string;
}

@Component({
  selector: 'app-project-slider',
  templateUrl: './projectSlider.component.html',
  styleUrls: ['./projectSlider.component.css']
})
export class ProjectSliderComponent extends LanguageWrapper {

  projects: Array<ProjectItem> = [
    {
      style: {'background-image': 'url("assets/images/slide_5.jpg")'},
      name: {en: 'Github repositories!', ru: 'Github репозитории!'},
      role: {en: '', ru: ''},
      description: {
        en: 'Checkout interesting code',
        ru: 'Проекты'
      },
      link: 'https://github.com/Komdosh?tab=repositories',
      buttonTitle: 'Github',
      imgUrl: 'assets/images/github.png'
    },
    {
      style: {background: '#78909C'},
      name: {en: 'Publications', ru: 'Публикации'},
      description: {en: 'Scientific researches', ru: 'Научные исследования'},
      role: {en: '', ru: ''},
      link: 'https://github.com/Komdosh/Publications',
      buttonTitle: 'Github',
      imgUrl: 'assets/images/publication.png'
    },
    {
      style: {background: '#352f44'},
      name: {en: 'SlaSol \u2014 Android game app', ru: 'SlaSol \u2014 Android приложение'},
      description: {en: 'Try to think in colors', ru: 'Попробуйте мыслить цветами'},
      role: {en: '', ru: ''},
      link: 'https://play.google.com/store/apps/details?id=com.komdosh.slasol',
      buttonTitle: 'Google Play',
      imgUrl: 'assets/images/SlaSol.jpg'
    }
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }

  trackByFn(index: number, item: ProjectItem) {
    if (item == null) {
      return null;
    }
    return item.name;
  }
}


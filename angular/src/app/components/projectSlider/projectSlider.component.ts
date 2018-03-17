import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';

@Component({
  selector: 'app-project-slider',
  templateUrl: './projectSlider.component.html',
  styleUrls: ['./projectSlider.component.css']
})
export class ProjectSliderComponent extends LanguageWrapper {

  projects: Array<any> = [
    {
      style: {background: '#352f44'},
      name: {en: 'SlaSol \u2014 Android game app', ru: 'SlaSol \u2014 Android приложение'},
      description: {en: 'Try to think in colors', ru: 'Попробуйте мыслить цветами'},
      role: {en: 'Role: Developer', ru: 'Роль: Разработчик'},
      link: 'https://play.google.com/store/apps/details?id=com.komdosh.slasol',
      buttonTitle: 'Google Play',
      imgUrl: 'assets/images/SlaSol.png'
    },
    {
      style: {background: '#78909C'},
      name: {en: 'SafetyStreets \u2014 Android app', ru: 'SafetyStreets \u2014 Android приложение'},
      description: {en: 'Are the streets safe?', ru: 'Безопасны ли улицы?'},
      role: {en: 'Role: Android Developer', ru: 'Роль: Android разработчик'},
      link: 'https://github.com/BlueSkyThinking/SafetyStreetsAndroid',
      buttonTitle: 'Github',
      imgUrl: 'assets/images/SafetyStreets.jpg'
    },
    {
      style: {background: '#599E34'},
      name: {en: 'Eltechat \u2014 Android app', ru: 'Eltechat \u2014 Android приложение'},
      description: {
        en: 'Group chat for Saint-Petersburg Electrotechnical University',
        ru: 'Групповой чат для Санкт-Петербургского Государственного электротехнического университета "ЛЭТИ"'
      },
      role: {en: 'Role: Android Developer', ru: 'Роль: Android разработчик'},
      link: 'https://github.com/Komdosh/AndroidEltechatApp',
      buttonTitle: 'Github',
      imgUrl: 'assets/images/eltechat.png'
    }
  ];

  githubRepositories: any = {
    style: {'background-image': 'url("assets/images/slide_5.jpg")'},
    name: {en: 'Github repositories!', ru: 'Github репозитории!'},
    description: {
      en: 'Checkout other interesting code',
      ru: 'Прочие проекты'
    },
    link: 'https://github.com/Komdosh?tab=repositories',
    buttonTitle: 'Github',
    imgUrl: 'assets/images/eltechat.png'
  };

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}


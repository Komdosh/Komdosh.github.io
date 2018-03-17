import {Component} from '@angular/core';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {LanguageWrapper} from '../../languageWrapper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends LanguageWrapper {
  menu: Array<any> = [
    {
      name: {en: 'Projects', ru: 'Проекты'},
      navSection: 'home',
    },
    {
      name: {en: 'Person', ru: 'Обо мне'},
      navSection: 'about',
    },
    {
      name: {en: 'Education', ru: 'Образование'},
      navSection: 'education',
    },
    {
      name: {en: 'Programming', ru: 'Программирование'},
      navSection: 'services',
    },
    {
      name: {en: 'Skills', ru: 'Навыки'},
      navSection: 'skills',
    },
    {
      name: {en: 'Experience', ru: 'Опыт'},
      navSection: 'experience',
    },
    {
      name: {en: 'Person', ru: 'Обо мне'},
      navSection: 'about',
    },
  ];
  nickname: string;

  flagIconsClasses: any = {en: 'flag-icon-gb', ru: 'flag-icon-ru'};

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }

  changeLanguage() {
    this.languageBroadcaster.changeLanguage();
  }

  initInfo() {
    this.nickname = this.infoService.getNickname();
  }
}

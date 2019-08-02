import {Component} from '@angular/core';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {LanguageWrapper} from '../../languageWrapper';
import {Translation} from '../../model/Translation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends LanguageWrapper {
  menu: Array<{name: {ru: string, en: string}, navSection: string}> = [
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
      name: {en: 'Portfolio', ru: 'Портфолио'},
      navSection: 'portfolio',
    },
    {
      name: {en: 'Programming', ru: 'Программирование'},
      navSection: 'programming',
    },
    {
      name: {en: 'Skills', ru: 'Навыки'},
      navSection: 'skills',
    },
    {
      name: {en: 'Experience', ru: 'Опыт'},
      navSection: 'experience',
    }
  ];
  nickname: string;

  flagIconsClasses: Translation = {en: 'flag-icon-ru', ru: 'flag-icon-gb'};

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

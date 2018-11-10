import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Education', ru: 'Образование'};

  educations: Array<any> = [
    {
      universityName: {
        en: 'Saint-Petersburg Electrotechnical University "LETI"<br/>Bachelor Degree',
        ru: 'Санкт-Петербургский Государственный<br/>Электротехнический Университет "ЛЭТИ"<br/>Бакалавр'
      },
      degree: {
        faculty: {en: 'Faculty of Computer Science and Technology', ru: 'Факультет компьютерных технологий и информатики'},
        department: {en: 'Department of Computer Science and Engineering', ru: 'Кафедра вычислительной техники'},
        stage: {en: 'Status: Finished', ru: 'Статус: Окончено'},
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {en: 'http://etu.ru/en', ru: 'http://etu.ru'}
      }
    },
    {
      universityName: {
        en: 'Saint-Petersburg Electrotechnical University "LETI"<br/>Master\'s Degree',
        ru: 'Санкт-Петербургский Государственный<br/>Электротехнический Университет "ЛЭТИ"<br/>Магистр'
      },
      degree: {
        faculty: {en: 'Faculty of Computer Science and Technology', ru: 'Факультет компьютерных технологий и информатики'},
        department: {en: 'Department of Computer Science and Engineering', ru: 'Кафедра вычислительной техники'},
        stage: {en: 'Status: 1 course', ru: 'Статус: 1 курс'},
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {en: 'http://etu.ru/en', ru: 'http://etu.ru'}
      }
    }
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}


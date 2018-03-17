import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent extends LanguageWrapper {

  sectionName: any = {en: 'Education', ru: 'Образование'};

  educations: any = [
    {
      universityName: {
        en: 'Saint-Petersburg Electrotechnical University "LETI"<br/>Bachelor Degree',
        ru: 'Санкт-Петербургский Государственный<br/>Электротехнический Университет "ЛЭТИ"<br/>Бакалавр'
      },
      degree: {
        faculty: {en: 'Faculty of Computer Science and Technology', ru: 'Факультет компьютерных технологий и информатики'},
        department: {en: 'Department of Computer Science and Engineering', ru: 'Кафедра вычислительной техники'},
        course: {en: 'Course: 4', ru: 'Курс: 4'},
        group: {en: 'Group: 4306', ru: 'Группа: 4306'},
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {en: 'http://eltech.ru/en', ru: 'http://eltech.ru'}
      }
    }
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}


import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';

type ProgrammingLang = {
  name: string,
  description: Translation,
  colorNum: string,
  fontSize: number
};

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Programming languages', ru: 'Языки программирования'};

  programmingLangs: Array<Array<ProgrammingLang>> = [
    [
      {
        name: 'Kotlin',
        description: {
          en: 'Strong knowledge. Use in my everyday work',
          ru: 'Отличные знания. Использую в моей ежедневной работе'
        },
        colorNum: '1',
        fontSize: 22
      },
      {
        name: 'C/C++',
        description: {
          en: 'Good knowledge. Write programs from time to time',
          ru: 'Хорошие знания. Пишу программы время от времени'
        },
        colorNum: '2',
        fontSize: 22
      },
      {
        name: 'Rust',
        description: {
          en: 'Base knowledge. Course study/Research open repositories',
          ru: 'Базовые знания. Прохожу курсы/Исследую открытые репозитории'
        },
        colorNum: '3',
        fontSize: 24
      },
    ],
    [
      {
        name: 'Java',
        description: {
          en: 'Strong knowledge. Use in my everyday work',
          ru: 'Отличные знания. Использую в моей ежедневной работе'
        },
        colorNum: '1',
        fontSize: 24
      },
      {
        name: 'Python',
        description: {
          en: 'Good knowledge. Write programs from time to time',
          ru: 'Хорошие знания. Пишу программы время от времени'
        },
        colorNum: '2',
        fontSize: 18
      }
    ],
    [
      {
        name: 'JS/TS',
        description: {
          en: 'Strong knowledge. Use in my everyday work',
          ru: 'Отличные знания. Использую в моей ежедневной работе'
        },
        colorNum: '1',
        fontSize: 22
      },
      {
        name: 'Caché',
        description: {
          en: 'Good knowledge. Write programs from time to time',
          ru: 'Базовые знания. Пишу программы время от времени'
        },
        colorNum: '2',
        fontSize: 20
      },
      {
        name: 'Go',
        description: {
          en: 'Base knowledge. Course study/Research open repositories',
          ru: 'Базовые знания. Прохожу курсы/Исследую открытые репозитории'
        },
        colorNum: '3',
        fontSize: 24
      },
    ]
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }

  trackByFn(index: number, item: ProgrammingLang) {
    if (item == null) {
      return null
    }
    return item.name
  }
}


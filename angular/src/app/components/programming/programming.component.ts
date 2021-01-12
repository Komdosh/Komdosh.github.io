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
          en: 'I write code for server side and Anrdoid applications',
          ru: 'Пишу код для серверных и Android приложений на нём'
        },
        colorNum: '1',
        fontSize: 24
      },
      {
        name: 'C++',
        description: {
          en: 'It is required for my scientific researches in multithreading environments',
          ru: 'Данный язык необходим для моих научных исследований в области многопоточных программ'
        },
        colorNum: '2',
        fontSize: 24
      },
    ],
    [
      {
        name: 'Java',
        description: {
          en: 'Main language for now',
          ru: 'Основной язык используемый в работе'
        },
        colorNum: '1',
        fontSize: 24
      },

      {
        name: 'JS/TS',
        description: {
          en: 'It is required for Angular and React frontend applications on my work',
          ru: 'Они применяются мной для написания клиентских приложений на Angular и React'
        },
        colorNum: '4',
        fontSize: 24
      },
    ],
    [
      {
        name: 'C',
        description: {
          en: 'For some reasons C++ is not always suitable for mine researches, so clean C is used (I rewrote MPICH functions for example)',
          ru: 'По некоторым причинам C++ не всегда подходит для моих исследований, поэтому используется чистый C (Например для переписываний функций в MPICH)'
        },
        colorNum: '3',
        fontSize: 24
      },
      {
        name: 'Python',
        description: {
          en: 'It is needed for my math evaluations. Sometimes I build a neural networks on it',
          ru: 'Приходит на помощь, когда мне требуется написать математическую программу, но также пробовал строить нейронные сети'
        },
        colorNum: '5',
        fontSize: 18
      },
      {
        name: 'Go',
        description: {
          en: 'Handy language for microservices, I use it for my work',
          ru: 'Полезный язык для написания микросервисов, использую в работе'
        },
        colorNum: '6',
        fontSize: 18
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


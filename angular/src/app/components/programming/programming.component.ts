import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Programming languages', ru: 'Языки программирования'};

  programmingLangs: Array<any> = [
    [
      {
        name: 'Kotlin',
        since: {en: '', ru: ''},
        description: {
          en: 'I write code for server side and Anrdoid applications',
          ru: 'Пишу код для серверных и Android приложений на нём'
        },
        colorNum: '1'
      },
      {
        name: 'C++',
        since: {en: '', ru: ''},
        description: {
          en: 'It is required for my scientific researches in multithreading environments',
          ru: 'Данный язык необходим для моих научных исследований в области многопоточных программ'
        },
        colorNum: '2'
      },
    ],
    [
      {
        name: 'Java',
        since: {en: '', ru: ''},
        description: {
          en: 'Main language for now',
          ru: 'Основной язык используемый в работе'
        },
        colorNum: '1'
      },

      {
        name: 'JS/TS',
        since: {en: '', ru: ''},
        description: {
          en: 'It is required for Angular and React frontend applications on my work',
          ru: 'Они применяются мной для написания клиентских приложений на Angular и React'
        },
        colorNum: '4'
      },
    ],
    [
      {
        name: 'C',
        since: {en: '', ru: ''},
        description: {
          en: 'For some reasons C++ sometimes is not suitable for mine researches, so clean C is used (I rewrote MPICH functions for example)',
          ru: 'По некоторым причинам C++ не всегда подходи для моих исследований, поэтому используется чистый C (Например для переписываний функций в MPICH)'
        },
        colorNum: '3'
      },
      {
        name: 'Python',
        since: {en: '', ru: ''},
        description: {
          en: 'It is needed for math evaluations for me, but sometimes I tried to build a neural networks',
          ru: 'Приходит на помощь, когда мне требуется написать математическую программу, но также пробовал строить нейронные сети'
        },
        colorNum: '5',
        fontSize: 18
      },
    ]
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}


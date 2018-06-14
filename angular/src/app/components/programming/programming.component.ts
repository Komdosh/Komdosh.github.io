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
        name: 'Java',
        since: {en: 'Since 2014', ru: 'C 2014'},
        sinceHarder: {en: 'Harder since April 2016', ru: 'Усерднее с апреля 2016'},
        description: {
          en: 'Main language for now. I deal with it in my work and write some apps for Android',
          ru: 'Основной язык используемый в работе, а также разрабатываю приложения под Android'
        },
        colorNum: '1'
      },
      {
        name: 'C++',
        since: {en: 'Since September 2015', ru: 'С сентября 2015'},
        description: {
          en: 'I write on this language about one year for studying, I really like this language',
          ru: 'Использовался больше для учёбы, но в целом понравился больше всего'
        },
        colorNum: '2'
      },
      {
        name: 'Assembler',
        since: {en: 'Since January 2016', ru: 'С Января 2016'},
        description: {
          en: 'Wrote a few simple programs. It\'s useful for understanding, how does programs work inside',
          ru: 'Написал несколько простых программ. Полезный опыт, чтобы понять, как программы работают изнутри'
        },
        colorNum: '3',
        fontSize: 14,
      },
    ],
    [
      {
        name: 'C',
        since: {en: 'Since September 2014', ru: 'С сентября 2014'},
        description: {
          en: 'Began to learning this language with my University courses. ' +
          'I wrote a project similar with database and control system on it',
          ru: 'С него началось моё обучение в ВУЗе, довольно не плохо его освоил'
        },
        colorNum: '3'
      },
      {
        name: 'JS',
        since: {en: 'Since 2009', ru: 'С 2009'},
        sinceHarder: {en: 'Harder since June 2016', ru: 'Усерднее с июня 2016'},
        description: {
          en: 'The one of my first programming languages. Start with writing simple scripts for sites, ' +
          'now I deal with it in my work',
          ru: 'Один из первых языков, которые я освоил. Начал с написания простых скриптов для своих сайтов.' +
          ' Сейчас имею с ним дело на работе'
        },
        colorNum: '4'
      },
      {
        name: 'C#',
        since: {en: 'Since September 2014', ru: 'С Сентября 2014'},
        description: {
          en: 'Experience at the moment is small enough. The implementation of the basic data structures and algorithms on graphs',
          ru: 'Опыт на данный момент небольшой. Реализация основных структур данных и алгоритмов на графах'
        },
        colorNum: '2',
      },
    ],
    [
      {
        name: 'Kotlin',
        since: {en: 'Since March 2017', ru: 'С Марта 2017'},
        description: {
          en: 'Start lerning for writing Android apps not only in Java',
          ru: 'Начал изучать для написания приложений под Android не только на Java'
        },
        colorNum: '1'
      },
      {
        name: 'Python',
        since: {en: 'Since February 2016', ru: 'С февраля 2016'},
        description: {
          en: 'Want to learn something unusal language. Now I could write a simple programs on it',
          ru: 'Хотелось научиться языку, который не похож на C'
        },
        colorNum: '5',
        fontSize: 18
      },
      {
        name: 'PHP',
        since: {en: 'Since 2009', ru: 'С 2009'},
        description: {
          en: 'Wrote some web-sites on this language',
          ru: 'Написал на нём штук десять разнообразных сайтов'
        },
        colorNum: '6',
      },
    ]
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}


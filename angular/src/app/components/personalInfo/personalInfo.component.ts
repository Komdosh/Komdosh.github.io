import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personalInfo.component.html',
  styleUrls: ['./personalInfo.component.css']
})
export class PersonalInfoComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Personal Info', ru: 'Обо мне'};

  name: Translation = {en: 'Andrey Tabakov', ru: 'Андрей Табаков'};

  position = 'Lead Software Engineer';

  aboutFirstPart: Translation = {
    en: 'I have more than 5 years experience in commercial development. Passed all stages: Intern, Junior, Middle, Senior. Now I\'m a TechLead. ' +
      'I apply my skills and knowledge of programming in various fields. Faced with banking, medical, government, social, gaming projects. ' +
      'I am actively continuing my studies, mastering new languages, approaches and technologies. I use TDD, DDD, I design microservice architectures.',
    ru: 'Занимаюсь коммерческой разработкой более 5 лет. Прошёл путь программиста: Intern, Junior, Middle, Senior, в данный момент TechLead. ' +
      'Применяю свои навыки и знания программирования в различных сферах. Сталкивался с банковскими, медицинскими, государственными, социальными, игровыми проектами. ' +
      'Активно продолжаю обучение, осваиваю новые языки, подходы и технологии. Использую TDD, DDD, Проектирую микросервисные архитектуры.'
  };
  aboutSecondPart: Translation = {
    en: '<b>Education:</b> Master of Computer Science. Saint Petersburg State Electrotechnical University "LETI".<br/>' +
      '<b>Scientific Researches:</b> Multiagent system, Multithreading and Multiprocessor programming. The results were presented at conferences: NSCF (Moscow, 2019), SPTDC (St. Petersburg, 2019), JWGEA (Kusatsu, Japan, 2018)<br/>' +
      '<b>Interests:</b> Backend, Frontend, Mobile, AI, NLP. "Talk is cheap. Show me the code." ― Linus Torvalds. Take a look on my <a href="https://github.com/Komdosh">Github</a>.' +
      '<br/>' +
      'I take part in open-source projects.<br/>' +
      '<br/>' +
      'In my spare time, I develop Android apps:<br/>' +
      '<a href="https://play.google.com/store/apps/details?id=com.komdosh.slasol">SlaSol - The Logic Game</a><br/>' +
      '<a href="https://play.google.com/store/apps/details?id=com.komdosh.tapping">Monkey Tapping - Multiplayer Clicker Game</a><br/>' +
      '<br/>' +
      'By nature, I am an early bird, I can start working at 5-6 am and till late in the evening, depending on workload and terms.',
    ru: '<b>Образование:</b> Магистр. Информатика и Вычислительная техника. Санкт-Петербургский Государственный Электротехнический Университет "ЛЭТИ".<br/>' +
      '<b>Научная деятеьность:</b> Исследования в области многоагентных систем, многопоточное и мультипроцессорное программирование. Результаты были представленны на конференциях: НСКФ(Москва, 2019), SPTDC(Санкт-Петербург, 2019), JWGEA(Кусацу, Япония, 2018)<br/>' +
      '<b>Интересы:</b> Backend, Frontend, Mobile, AI, NLP. "Разговор ничего не стоит. Покажите мне код" ― Linus Torvalds. Взгляните на мой <a href="https://github.com/Komdosh">Github</a>.' +
      '<br/>' +
      'Принимаю участие в жизни Open-source проектов.<br/>' +
      '<br/>' +
      'В свободное время разрабатываю Android приложения:<br/>' +
      '<a href="https://play.google.com/store/apps/details?id=com.komdosh.slasol">SlaSol - логическая игра</a><br/>' +
      '<a href="https://play.google.com/store/apps/details?id=com.komdosh.tapping">Monkey Tapping - игра на скорость</a><br/>' +
      '<br/>' +
      'По природе жаворонок, могу начать работать в 5-6 утра и до позднего вечера, в зависимости от загруженности и сроков.'
  };

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}

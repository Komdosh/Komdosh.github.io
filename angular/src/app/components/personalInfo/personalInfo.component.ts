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

  name: Translation = {en: 'Andrey Tabakov', ru: 'Табаков Андрей'};

  position = 'Full-Stack Engineer Kotlin/Java';

  aboutFirstPart: Translation = {
    en: 'Born May 12, 1996 in Saint-Petersburg, Russia. My interests is programming, studying, self-development, guitar playing, walking.',
    ru: 'Родился 12 мая 1996 года в Санкт-Петербурге. Мои интересы: Программирование, обучение, личное развитие, игра на гитаре и прогулки на свежем воздухе.'
  };
  aboutSecondPart: Translation = {
    en: 'At the moment I am a full-time Master student. Combining work with study.<br/>' +
      '<br/>' +
      'I am interested in questions of artificial intelligence.<br/>' +
      'As a graduation project for bachelor degree, an algorithm to control the perception of an intelligent agent using the method of forward iterative planning was developed.<br/>' +
      '<br/>' +
      'I am also interested in issues related to multithreading. <br/>' +
      'One of my research is related to relaxed concurrent data structure. As a result of this study, an algorithm to optimize the execution time of operations for the Multiqueues structure was developed:<br/>' +
      '<br/>' +
      '<a href="https://github.com/Komdosh/Multiqueues">https://github.com/Komdosh/Multiqueues</a><br/>' +
      '<br/>' +
      'The results of this work were personally presented at the JWGEA 2018 conference in Japan.<br/>' +
      '<br/>' +
      'In addition to the main activity, I develop various applications as a hobby.<br/>' +
      'One of the applications for Android published in the Google Play Store:<br/>' +
      '<br/>' +
      '<a href="https://play.google.com/store/apps/details?id=com.komdosh.slasol">https://play.google.com/store/apps/details?id=com.komdosh.slasol</a><br/>' +
      '<br/>' +
      'By nature, I am an early bird, I can start working at 5-6 am and till late in the evening, depending on workload and terms.',
    ru: 'В данный момент являюсь очным студентом магистратуры. Совмещаю работу с учёбой.<br/>' +
      '<br/>' +
      'Интересны вопросы искусственного интеллекта.<br/>' +
      'В качестве дипломного проекта в бакалавриате был разработан алгоритм управления восприятием интеллектуального агента с использованием метода опережающего итеративного планирования.<br/>' +
      '<br/>' +
      'Также интересны вопросы связанные с многопоточностью. Одно из моих исследований связано со структурами данных с ослабленной семантикой выполнения операций. В результате данного исследования был разработан алгоритм оптимизации выполнения операций для структуры Multiqueues:<br/>' +
      '<br/>' +
      '<a href="https://github.com/Komdosh/Multiqueues">https://github.com/Komdosh/Multiqueues</a><br/>' +
      '<br/>' +
      'Результаты данной работы были лично представлены на конференции JWGEA 2018 в Японии.<br/>' +
      '<br/>' +
      'Помимо основной деятельности, разрабатываю различные приложения в качестве хобби.<br/>' +
      'Одно из приложений для Android опубликованных в Google Play Store:<br/>' +
      '<br/>' +
      '<a href="https://play.google.com/store/apps/details?id=com.komdosh.slasol">https://play.google.com/store/apps/details?id=com.komdosh.slasol</a><br/>' +
      '<br/>' +
      'По природе жаворонок, могу начать работать в 5-6 утра и до позднего вечера, в зависимости от загруженности и сроков.'
  };

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}

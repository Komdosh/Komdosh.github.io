import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Experience', ru: 'Опыт'};
  companies: Array<any> = [
    {
      name: 'Siemens',
      position: {
        name: {en: 'Position: Intern Software Developer', ru: 'Позиция: Intern Software Developer'},
        since: {en: 'Since: July 2016', ru: 'C: Июля 2016'},
        until: {en: 'Until: July 2017', ru: 'По: Июль 2017'},
      },
      responsibilities: [
        {en: 'Research techonolgies, methods of implementation and so on', ru: 'Исследование технологий, методов разработки и т.д.'},
        {en: 'Java, Javascript, Python', ru: 'Java, Javascript, Python'},
        {en: 'Developing application architecture', ru: 'Разработка архитектуры приложений'},
        {en: 'Developing database architecture', ru: 'Разработка архитектуры баз данных'},
        {en: 'DevOps', ru: 'DevOps'},
      ],
      description: {
        en: 'My main responsibilities included the development of server and client-side two applications.<br/>' +
          '<br/>' +
          'The first project was related to rail traffic. During team development, it was necessary to add functionality to the existing system. The application used Spring + JSP + PostgreSQL. For this application, a colleague, heuristic algorithm was implemented in Python, which was rewritten in Java, with my help.<br/>' +
          '<br/>' +
          'The second project is related to the design of networks of medium and low voltage. I have been actively involved in the design and development of this application from scratch. Core technologies: Spring + AngularJS + PostgreSQL.<br/>' +
          '<br/>' +
          'Practical knowledge was obtained on debugging and testing server applications during the internship.<br/>' +
          '<br/>' +
          'For version control, Git is used.<br/>' +
          '<br/>' +
          'In addition to the main responsibilities, CI systems (Jenkins, TeamCity) were installed, configured and integrated.<br/>' +
          '<br/>' +
          'For reporting and project management used Redmine. Scrum\'s agile development methodology was applied with the interplay of approaches from XP.<br/>',
        ru: 'В основные обязанности входила разработка серверной и клиентской части двух приложений. <br/>' +
          '<br/>' +
          'Первый проект был связан с железодорожными сообщениями. В ходе командной разработки, было необходимо добавить функциональность существующей системе. Приложение использовало Spring + JSP + PostgreSQL. Для данного приложения, коллегой, был реализован эврестический алгоритм на Python, который впоследствие, с моей помощью, был переписан на Java. <br/>' +
          '<br/>' +
          'Второй проект был связан с проектированием сетей среднего и низкого напряжений. Я принимал активное участие в проектировании и разработке данного приложения с нуля. Стэк технологий Spring + AngularJS + PostgreSQL.<br/>' +
          '<br/>' +
          'При прихождении стажировки, также были получены практические знания по отладке и тестированию серверных приложений.<br/>' +
          '<br/>' +
          'Для контроля версий использовался Git.<br/>' +
          '<br/>' +
          'Помимо основных обязанностей, были установлены, сконфигурированны и внедрены системы CI: Jenkins, TeamCity.<br/>' +
          '<br/>' +
          'Для отчётности и планирования проекта использовался Redmine. Применялась методология гибкой разработки Scrum с взаимствованием подходов из XP.<br/>'
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {en: 'https://www.siemens.com/global/en/home.html', ru: 'https://www.siemens.com/ru/ru/home.html'}
      }
    },
    {
      name: 'Biarum',
      position: {
        name: {en: 'Position: Full-Stack Developer', ru: 'Позиция: Full-Stack Developer'},
        since: {en: 'Since: July 2017', ru: 'C: Июля 2017'},
        until: {en: 'Until: Now', ru: 'По: настоящее время'},
      },
      responsibilities: [
        {
          en: 'Web development: Angular 4-5, Spring, PostgreSQL, Intersystems Cache',
          ru: 'Web разработка: Angular 4-5, Spring, PostgreSQL, Intersystems Cache'
        },
        {en: 'Apache POI для автоматизации отчётов', ru: 'Apache POI для автоматизации отчётов'},
        {en: 'Developing application architecture', ru: 'Разработка архитектуры приложений'},
        {en: 'Map processing: shapefile, kml\\kmz', ru: 'Обработка карт: shapefile, kml\\kmz'},
        {en: 'FHIR', ru: 'FHIR'},
        {en: 'Caché', ru: 'Caché'},
        {en: 'Apache Ruta Script', ru: 'Apache Ruta Script'},
        {en: 'DevOps', ru: 'DevOps'},
      ],
      description: {
        en: 'I participate in team development of several projects for healthcare and processing data of traffic situations. Core technologies: Java 10 + Spring + Angular <br/>' +
          '<br/>' +
          'I implemented the code in Java, that composes automated reports in PPTX using the Apache POI framework.<br/>' +
          '<br/>' +
          'Developed algorithms interacting with maps (shapefile), in Java. To support GPS coordinates, PostgreSQL used PostGIS.<br/>' +
          '<br/>' +
          'One of the client application was completely rewritten from React to Angular.<br/>' +
          '<br/>' +
          'A natural language processing algorithm for processing medical notes, was developed and implemented using the Apache Ruta Engine and Intersystems IKnow.<br/>' +
          '<br/>' +
          'I am familiar and apply in my work a modern protocol for sharing patient data - FHIR.<br/>' +
          '<br/>' +
          'I also had the opportunity to familiarize myself with Intersystems Caché, I implemented some of the functionality in this language.<br/>' +
          '<br/>' +
          'In addition to direct development, I raised a lot of different server environments on Ubuntu, CentOS, Windows Server, MacOS X. The environment included: Tomcat, SSL, Apache, Nginx, PHP, Node, PostgreSQL, MySQL, etc. Continuous Integration build projects in TeamCity. Also SonarQube was integrated in my work.<br/>' +
          '<br/>' +
          'In several projects I consulting developers and for some of them I make a code review of pull-requests.<br/>' +
          '<br/>' +
          'For task management we use Atlasian Jira. For project management, flexible methodologies such as Scrum, Kanban, XP are used.<br/>',
        ru: 'Принимаю участие в командной разработке нескольких проектов в сфере дорожной обстановки и здравоохранения. Основной стек технологий Java 10 + Spring + Angular <br/>' +
          '<br/>' +
          'Мной был реализован код, составляющий автоматизированные отчёты в формате PPTX, используя библиотеку Apache POI.<br/>' +
          '<br/>' +
          'Были разработаны алгоритмы взаимодействующие с картами (shapefile), на языке Java. Со стороны PostgreSQL была поддержка PostGIS.<br/>' +
          '<br/>' +
          'Одно из клиентских приложений было полностью переписано с React на Angular.<br/>' +
          '<br/>' +
          'Был разработан и внедрён алгоритм обработки естественного языка с применением Apache Ruta Engine и Intersystems IKnow.<br/>' +
          '<br/>' +
          'Знаком и применяю в работе современный протокол для обмена данных о пациенте FHIR. <br/>' +
          '<br/>' +
          'Также имел возможность ознакомиться с Intersystems Cache (некоторое окружение с языком программирования), мною была реализована часть функциональности на данном языке.<br/>' +
          '<br/>' +
          'Помимо непосредственной разработки мною было поднято множество различных серверных окружений на Ubuntu, CentOS, Windows Server, MacOS X. В данные окружения, в зависимости от потребностей, входили: Tomcat, SSL, Apache, Nginx, PHP, Node, PostgreSQL, MySQL и др. Настроены сборки проектов в TeamCity. В некоторые приложения внедрён SonarQube.<br/>' +
          '<br/>' +
          'В нескольких проектах выступаю в роли консультанта. Провожу переодические CodeReview пулл-реквестов.<br/>' +
          '<br/>' +
          'Для планирования и распределения задач используется Atlasian Jira. Используются приёмы из гибких методологий таких как Scrum, Kanban, XP.<br/>'
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {en: 'http://www.biarum.com', ru: 'http://www.biarum.com'}
      }
    },
  ];
  responsibility: any = {en: 'Responsibility', ru: 'Обязанности'};

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}

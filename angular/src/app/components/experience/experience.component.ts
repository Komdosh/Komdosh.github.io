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
  companies: Array<{
    name: string,
    position: { name: Translation, since: Translation, until: Translation },
    description: Translation,
    website: { buttonTitle: Translation, link: Translation }
  }> = [
    {
      name: 'Siemens',
      position: {
        name: {en: 'Position: Intern Java Developer', ru: 'Позиция: Intern Java Developer'},
        since: {en: 'Since: July 2016', ru: 'C: Июля 2016'},
        until: {en: 'Until: July 2017', ru: 'По: Июль 2017'},
      },
      description: {
        en: 'My main responsibilities included the development of server and client-side of two applications.\n' +
          '\n' +
          'The first project was related to rail traffic. While development, it was necessary to add functionality to the existing system. For this application, a colleague, heuristic algorithm was implemented in Python, which was rewritten in Java, with my help.\n' +
          '\n' +
          'Core technologies:\n' +
          'Spring\n' +
          'JSP\n' +
          'PostgreSQL\n' +
          '\n' +
          'The second project is related to the design networks of medium and low voltage. I have been actively involved in the architecture design and development of this application from scratch.\n' +
          '\n' +
          'Core technologies:\n' +
          'Spring\n' +
          'AngularJS\n' +
          'PostgreSQL\n' +
          '\n' +
          'Practical knowledge was obtained on debugging and testing server applications during the internship.\n' +
          '\n' +
          'For version control, Git is used.\n' +
          '\n' +
          'In addition to the main responsibilities, CI systems (Jenkins, TeamCity) were installed, configured and integrated.\n' +
          '\n' +
          'For reporting and project management used Redmine. Scrum\'s agile development methodology was applied with the interplay of approaches from XP.',
        ru: 'В основные обязанности входила разработка серверной и клиентской части двух приложений.\n' +
          '\n' +
          'Первый проект был связан с железодорожными сообщениями. В ходе командной разработки, было необходимо добавить функциональность существующей системе. Для данного приложения, коллегой, был реализован эврестический алгоритм на Python, который впоследствие, с моей помощью, был переписан на Java.\n' +
          '\n' +
          'Основной стек технологий:\n' +
          'Spring\n' +
          'JSP\n' +
          'PostgreSQL\n' +
          '\n' +
          'Второй проект был связан с проектированием сетей среднего и низкого напряжений. Я принимал активное участие в проектировании архитектуры и разработке данного приложения с нуля.\n' +
          '\n' +
          'Основной стек технологий:\n' +
          'Spring\n' +
          'AngularJS\n' +
          'PostgreSQL.\n' +
          '\n' +
          'При прихождении стажировки, также были получены практические знания по отладке и тестированию серверных приложений.\n' +
          '\n' +
          'Для контроля версий использовался Git.\n' +
          '\n' +
          'Помимо основных обязанностей, были установлены, сконфигурированны и внедрены системы CI: Jenkins, TeamCity.\n' +
          '\n' +
          'Для отчётности и планирования проекта использовался Redmine. Применялась методология гибкой разработки Scrum с взаимствованием подходов из XP.'
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {
          en: 'https://www.siemens.com/global/en/home.html',
          ru: 'https://www.siemens.com/ru/ru/home.html'
        }
      }
    },
    {
      name: 'Biarum',
      position: {
        name: {en: 'Position: Full-Stack Developer', ru: 'Позиция: Full-Stack Developer'},
        since: {en: 'Since: July 2017', ru: 'C: Июля 2017'},
        until: {en: 'Until: Now', ru: 'По: настоящее время'},
      },
      description: {
        en: 'I participate in team development of several projects for healthcare and processing data of car traffic.\n' +
          '\n' +
          'Core technology Stack:\n' +
          'Java 13+\n' +
          'Spring Boot 2\n' +
          'Angular 9+\n' +
          'PostgreSQL\n' +
          'Apache POI\n' +
          '\n' +
          'I participate in development as FullStack. I refactored Java code, implement functionality for compose automated reports in PPTX using the Apache POI framework.\n' +
          '\n' +
          'I developed algorithms that interacting with maps (shapefile), in Java. To support GPS coordinates, PostgreSQL used PostGIS.\n' +
          '\n' +
          'In addition to direct development, I raised a lot of different server environments on Ubuntu, CentOS, Windows Server, MacOS X. The environment included: Tomcat, SSL, Apache, Nginx, PHP, Node, PostgreSQL, MySQL, etc. Continuous Integration build projects in TeamCity. Also SonarQube was integrated in my team work.\n' +
          '\n' +
          'In several projects I consulting developers and for some of them I make a code review of pull-requests.\n' +
          '\n' +
          'For task management we use Atlassian Jira. For project management, agile methodologies such as Scrum, Kanban, XP are used.\n',
        ru: 'Принимаю участие в командной разработке нескольких проектов в сфере дорожной обстановки и здравоохранения.\n' +
          '\n' +
          'Основной стек технологий:\n' +
          'Java 13+\n' +
          'Spring Boot 2\n' +
          'Angular 9+\n' +
          'PostgreSQL\n' +
          'Apache POI\n' +
          '\n' +
          'Участвовал в командной разработке в роли FullStack. Мной был реализован код, составляющий автоматизированные отчёты в формате PPTX, используя библиотеку Apache POI.\n' +
          '\n' +
          'Были разработаны алгоритмы взаимодействующие с картами (shapefile), на языке Java. Со стороны PostgreSQL была поддержка PostGIS.\n' +
          '\n' +
          'Знаком и применяю в работе современный протокол для обмена данных о пациенте FHIR.\n' +
          '\n' +
          'Помимо непосредственной разработки мною было поднято множество различных серверных окружений на Ubuntu, CentOS, Windows Server, MacOS X. В данные окружения, в зависимости от потребностей, входили: Tomcat, SSL, Apache, Nginx, PHP, Node, PostgreSQL, MySQL и др. Настроены сборки проектов в TeamCity. В некоторые приложения внедрён SonarQube.\n' +
          '\n' +
          'В нескольких проектах выступаю в роли консультанта. Провожу переодические код ревью пулл-реквестов.\n' +
          '\n' +
          'Для планирования и распределения задач используется Atlassian Jira. Используются приёмы из гибких методологий таких как Scrum, Kanban, XP.'
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {en: 'http://www.biarum.com', ru: 'http://www.biarum.com'}
      }
    },
    {
      name: 'Aluna Health',
      position: {
        name: {en: 'Position: Lead Software Engineer', ru: 'Позиция: Lead Software Engineer'},
        since: {en: 'Since: November 2017', ru: 'C: Ноября 2017'},
        until: {en: 'Until: Now', ru: 'По: настоящее время'},
      },
      description: {
        en: 'My Main Project.\n' +
          'Aluna Platform is designed and implemented by BIARUM (see below), but Aluna Health is registered in Boston, USA.\n' +
          '\n' +
          'Core Technology Stack:\n' +
          'Java 13+\n' +
          'Angular 9+\n' +
          'Spring Boot 2 (Data, Security and so on)\n' +
          'Gradle (Kotlin DSL)\n' +
          'PostgreSQL\n' +
          'Apache UIMA Ruta\n' +
          '\n' +
          'This project consist of 4 subprojects for medicians.\n' +
          '\n' +
          '<a href="https://chart.alunahealth.com">Aluna Chart Abstraction</a> - Extracting data from free text clinical notes for automatically fill quiz (Structured form).\n' +
          '<a href="https://library.alunahealth.com">Aluna Library</a> - Library of logical medical workflow rules (IF-THEN-ELSE format).\n' +
          '<a href="https://cds.alunahealth.com">FHIR CDS</a> - Clinical Decision Support system as FHIR application. It takes workflows from Library and convert it to quiz. When it is filled out it provides to medicians next steps to fight with disease.\n' +
          '<a href="https://oncocds.alunahealth.com">OncoCDS</a> - Oncology Clinical Decision Support system for oncology cases. It also take workflows from Library and convert it to quiz and provides to medicians next steps to fight with disease.\n' +
          '\n' +
          'When I start, I was only one dev on this project, so I start it from scratch. Company gave me a very small project on React and Spring with JDBC connection.\n' +
          'Now I\'m Lead on this project.\n' +
          'The team grew up to: 5 Dev, 1 QA, 1 Project Manager, 1 Owner, 1 CTO, 1 UI/UX.\n' +
          '\n' +
          'Most tricky tasks:\n' +
          '\n' +
          '- A natural language processing algorithm for processing clinical notes, was developed and implemented using the Apache Ruta Engine, InterSystems IKnow and CTakes.\n' +
          '\n' +
          '- Now I am familiar and apply in my work a modern protocol for sharing patient data - FHIR.\n' +
          '\n' +
          '- Aluna Health has a connection with InterSystems company.\n' +
          'So I had the opportunity to familiarize myself with InterSystems Caché, I wrote code for IRIS and HealthShare applications. Especially for InterSystems company we developed their own <a href="https://fhirsandbox.intersystems.com/apps">FHIR Sandbox</a>\n' +
          'on Angular + InterSystems Caché (IRIS).\n' +
          '- Aluna Health also has a connection with MIT, we did <a href="http://sustainability.mit.edu/living-lab-finder">Living Labs Finder</a> for them.\n' +
          '\n' +
          'Besides writing a code, I also do a code review of pull-requests for my team, develop technical specifications for tasks, help with coding.\n' +
          '\n' +
          'For task management we use Atlassian Jira. For project management, agile methodologies such as Kanban (with some of scrum features) is used.\n',
        ru: 'Это мой основной проект и то чем я больше всего горжусь.\n' +
          'Aluna Platform спроектирована и разработана компанией BIARUM (см. ниже).\n' +
          'Однако этот проект принадлежит Aluna Health которая зарегистрирована в Boston, USA.\n' +
          '\n' +
          'Основной стек технологий:\n' +
          'Java 13+\n' +
          'Angular 9+\n' +
          'Spring Boot 2 (Data, Security and so on)\n' +
          'Gradle (Kotlin DSL)\n' +
          'PostgreSQL\n' +
          'Apache UIMA Ruta\n' +
          '\n' +
          'Проект состоит из 4 подпроектов для докторов (по большей части занимающихся онкологией).\n' +
          '\n' +
          '<a href="https://chart.alunahealth.com">Aluna Chart Abstraction</a> - Экстракция данных из записей врачей (которые они ведут в свободной форме) и автоматическое заполнение некоторого опросника (в структурированной форме).\n' +
          '<a href="https://library.alunahealth.com">Aluna Library</a> - Библиотека логических медицинских правил (IF-THEN-ELSE формат).\n' +
          '<a href="https://cds.alunahealth.com">FHIR CDS</a> - Система поддержки принятия решений как FHIR приложение. Данный сервис способен взять правила из библиотеки логических медицинских правил (см. Aluna Library) и сконвертировать их в опросник по результатам которого, будут предложены варианты дальнейших действий.\n' +
          '<a href="https://oncocds.alunahealth.com">OncoCDS</a> - Система поддержки принятия решений для\n' +
          'онкологии. Она также берёт правила из библиотеки, формирует опросник и выдаёт решение что следует сделать далее.\n' +
          '\n' +
          'Когда я начинал этот проект, я был один, моя компания отдала мне маленькй проект на React и сервер на Spring, с этого началась разработка всей платформы.\n' +
          'Сейчас я являюсь Lead Engineer на данном проекте.\n' +
          '\n' +
          'Наша команда выросла до: 5 разработчиков, 1 QA, 1 Project Manager, 1 Owner, 1 CTO, 1 UI/UX.\n' +
          '\n' +
          'Наиболее интересными задачами я могу выделить:\n' +
          '\n' +
          '- Разработка алгоритма и внедрение анализатора текста для обработки медицинских записей на основе Apache Ruta Engine, InterSystems IKnow и CTakes.\n' +
          '\n' +
          '- Понимаю и активно использую современный протокол передачи медицинских данных пациента - FHIR.\n' +
          '\n' +
          '- Aluna Health тесно сотрудничает с компанией InterSystems.\n' +
          'Мне представилась возможность изучить язык программирования InterSystems Caché, я писал и внедрял код для IRIS и HealthShare приложений. Также специально для компании InterSystems, наша компания разработала им <a href="https://fhirsandbox.intersystems.com/apps">FHIR Sandbox</a>\n' +
          'on Angular + InterSystems Caché (IRIS).\n' +
          '- Aluna Health также сотрудничает с MIT, под заказ мы сделали им <a href="http://sustainability.mit.edu/living-lab-finder">Living Labs Finder</a>.\n' +
          '\n' +
          'Помимо написания кода, я провожу код ревью пулл реквестов для всей моей команды, разрабатывают техничискую спецификацию для поставленных задач, помогаю разрабатывать другим членам команды.\n' +
          '\n' +
          'Для планирования задач мы используем Atlassian Jira. Для проектного менеджмента используются гибкие методолигии, в основном Kanban с некоторыми дополнениями из Scrum и XP.'
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {en: 'https://www.alunahealth.com/', ru: 'https://www.alunahealth.com/'}
      }
    },
    {
      name: 'PrismHR',
      position: {
        name: {en: 'Position: Remote Full-Stack Developer', ru: 'Позиция: Remote Full-Stack Developer'},
        since: {en: 'Since: may 2019', ru: 'C: мая 2019'},
        until: {en: 'Until: Now', ru: 'По: настоящее время'},
      },
      description: {
        en: 'Remote worker under BIARUM (see below).\n' +
          '\n' +
          'Mine main responsibilities is to develop a new features for Benefit Enrollment module.\n' +
          '\n' +
          'Core technology Stack:\n' +
          'React\n' +
          'AWS (Lambda)\n' +
          'Serverless\n' +
          'GraphQL\n' +
          'NodeJS\n' +
          '\n' +
          'I participate in development and migration from this technology stack:\n' +
          'Unibasic (backend) + Scala as endpoint API\n' +
          'Unidata (NoSQL database)\n' +
          'AngularJS (frontend)\n' +
          'I also did form analysis for migration on new technology stack.\n' +
          '\n' +
          'Every day meetings on RingCentral\\GoToMeeting.\n' +
          'Team consist of 2 Product owners, 1 Scrum Master, 2 QA, 1 TeamLead, 4 Devs, 1 UI/UX.\n' +
          '\n' +
          'Full scrum life-cycle is used such as planning, stand-up, retro, grooming and so on. Atlassian Jira is used for management.',
        ru: 'Удалённая работа от компании BIARUM (см. ниже).\n' +
          '\n' +
          'Основные обязанности состоят в разработке новых возможностей для модуля Benefit Enrollment их собственной HR платформы.\n' +
          '\n' +
          'Основной стек технологий:\n' +
          'React\n' +
          'AWS (Lambda)\n' +
          'Serverless\n' +
          'GraphQL\n' +
          'NodeJS\n' +
          '\n' +
          'Я принимаю непосредственное участие в текущей разработке, а также миграции со старого стека:\n' +
          'Unibasic (backend) + Scala as endpoint API\n' +
          'Unidata (NoSQL database)\n' +
          'AngularJS (frontend)\n' +
          'Также выполняю анализ старых форм, которые требуется мигрировать на новый проект.\n' +
          '\n' +
          'Каждый день у меня митинги на RingCentral\\GoToMeeting.\n' +
          'Основная команда находится в Бостоне: 2 Product owners, 1 Scrum Master, 2 QA, 1 TeamLead, 4 Devs, 1 UI/UX.\n' +
          '\n' +
          'На данном проекте используется полный цикл методологии Scrum (планирование, ретро, стендапы и т.п.).\n' +
          'Atlassian Jira используется для планирования.\n'
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {en: 'https://www.prismhr.com/', ru: 'https://www.prismhr.com/'}
      }
    },
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }

  replaceNewLineWithHtmlBr(text: string) {
    return text.replace(/\n/g, '<br />')
  }
}

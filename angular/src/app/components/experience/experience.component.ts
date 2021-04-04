import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';

interface Company {
  name: string;
  position: { name: Translation, since: Translation, until: Translation };
  description: Translation;
  website: { buttonTitle: Translation, link: Translation };
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Experience', ru: 'Опыт'};
  companies: Array<Company> = [
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
          'Spring, JSP, PostgreSQL\n' +
          '\n' +
          'The second project is related to the design networks of medium and low voltage. I have been actively involved in the architecture design and development of this application from scratch.\n' +
          '\n' +
          'Core technologies:\n' +
          'Spring, AngularJS, PostgreSQL\n' +
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
          'Первый проект был связан с железнодорожными сообщениями. В ходе командной разработки, было необходимо добавить функциональность существующей системе. Для данного приложения, коллегой, был реализован эвристический алгоритм на Python, который впоследствии, с моей помощью, был переписан на Java.\n' +
          '\n' +
          'Основной стек технологий:\n' +
          'Spring, JSP, PostgreSQL\n' +
          '\n' +
          'Второй проект был связан с проектированием сетей среднего и низкого напряжений. Я принимал активное участие в проектировании архитектуры и разработке данного приложения с нуля.\n' +
          '\n' +
          'Основной стек технологий:\n' +
          'Spring, AngularJS, PostgreSQL.\n' +
          '\n' +
          'При прохождении стажировки, также были получены практические знания по отладке и тестированию серверных приложений.\n' +
          '\n' +
          'Для контроля версий использовался Git.\n' +
          '\n' +
          'Помимо основных обязанностей, были установлены, сконфигурированны и внедрены системы CI: Jenkins, TeamCity.\n' +
          '\n' +
          'Для отчётности и планирования проекта использовался Redmine. Применялась методология гибкой разработки Scrum с заимствованием подходов из XP.'
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
      name: 'PrismHR',
      position: {
        name: {
          en: 'Position: Remote Full-Stack Developer',
          ru: 'Позиция: Remote Full-Stack Developer'
        },
        since: {en: 'Since: May 2019', ru: 'C: Мая 2019'},
        until: {en: 'Until: February 2020', ru: 'По: Февраль 2020'},
      },
      description: {
        en: 'Remote worker under BIARUM.\n' +
          '\n' +
          'My main responsibility is to develop new features for the Benefit Enrollment module.\n' +
          '\n' +
          'Core technology stack:\n' +
          'React\n' +
          'GraphQL, AWS (Lambda), Serverless, NodeJS\n' +
          '\n' +
          'I participated in development and migration from this technology stack:\n' +
          'Unibasic (backend) + Scala as endpoint API\n' +
          'Unidata (NoSQL database)\n' +
          'AngularJS (frontend)\n' +
          'I also did form analysis for migration on the new technology stack.\n' +
          '\n' +
          'Everyday meetings on RingCentral\\GoToMeeting.\n' +
          'The team consisted of 2 Product owners, 1 Scrum Master, 2 QA, 1 TeamLead, 4 Devs, 1 UI/UX.\n' +
          '\n' +
          'Full scrum life-cycle is used such as planning, stand-up, retro, grooming, etc. Atlassian Jira is used for management.',
        ru: 'Удалённая работа от компании BIARUM (см. ниже).\n' +
          '\n' +
          'Основные обязанности состоят в разработке новых возможностей для модуля Benefit Enrollment их собственной HR платформы.\n' +
          '\n' +
          'Основной стек технологий:\n' +
          'React\n' +
          'GraphQL, AWS (Lambda), Serverless, NodeJS\n' +
          '\n' +
          'Я принимал непосредственное участие в разработке, а также миграции со старого стека:\n' +
          'Unibasic (backend) + Scala as endpoint API\n' +
          'Unidata (NoSQL database)\n' +
          'AngularJS (frontend)\n' +
          'Также выполнял анализ старых форм, которые требовалось мигрировать на новый проект.\n' +
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
          'Core technology stack:\n' +
          'Java, Spring Boot\n' +
          'Angular, Leaflet\n' +
          'PostgreSQL, Redis\n' +
          '\n' +
          'I participate in development as full-stack. I refactored Java code, implement functionality for compose automated reports in' +
          ' PPTX using the Apache POI framework.\n' +
          '\n' +
          'I developed algorithms that interacting with maps (shapefile), in Java. To support GPS coordinates, PostgreSQL used PostGIS.\n' +
          '\n' +
          'In addition to direct development, I raised a lot of different server environments on Ubuntu, CentOS, Windows Server, MacOS' +
          ' X. The environment included: Tomcat, SSL, Apache, Nginx, PHP, Node, PostgreSQL, MySQL, etc. Continuous Integration build' +
          ' projects in TeamCity. SonarQube was integrated into workflow.\n' +
          '\n' +
          'In several projects, I consulting developers and for some of them, I make a code review of pull-requests.\n' +
          '\n' +
          'For task management, we use Atlassian Jira. For project management, agile methodologies such as Scrum, Kanban, XP are used.\n' +
          '\n' +
          'I do technical interviews for any kind of software engineer.',
        ru: 'Принимаю участие в командной разработке нескольких проектов в сфере дорожной обстановки и здравоохранения.\n' +
          '\n' +
          'Основной стек технологий:\n' +
          'Java, Spring Boot\n' +
          'Angular, Leaflet\n' +
          'PostgreSQL, Redis\n' +
          '\n' +
          'Участвовал в командной разработке в роли full-stack. Мной был реализован код, составляющий автоматизированные отчёты в формате PPTX, ' +
          'используя библиотеку Apache POI.\n' +
          '\n' +
          'Были разработаны алгоритмы взаимодействующие с картами (shapefile), на языке Java. Со стороны PostgreSQL была поддержка PostGIS.\n' +
          '\n' +
          'Знаком и применяю в работе современный протокол для обмена данных о пациенте FHIR.\n' +
          '\n' +
          'Помимо непосредственной разработки мною было поднято множество различных серверных окружений на Ubuntu, CentOS, Windows Server, MacOS X. ' +
          'В данные окружения, в зависимости от потребностей, входили: Tomcat, SSL, Apache, Nginx, PHP, Node, PostgreSQL, MySQL и др. ' +
          'Настроены сборки проектов в TeamCity. В некоторые приложения внедрён SonarQube.\n' +
          '\n' +
          'В нескольких проектах выступаю в роли консультанта. Провожу периодические код ревью пулл-реквестов.\n' +
          '\n' +
          'Для планирования и распределения задач используется Atlassian Jira. Используются приёмы из гибких методологий таких как' +
          ' Scrum, Kanban, XP.\n' +
          'Провожу технические собеседований на все позиции Software Engineer.'
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
        en: 'Aluna Platform - is a cloud-based system for medical professionals to help them make clinical decisions.\n' +
          '\n' +
          'I started it from scratch, I was the only one dev on this project. ' +
          'The team grew up to: 4 Dev, 2 QA, 1 UI/UX, 1 BA, 1 PM, 1 CTO, 1 CEO. Now I\'m Lead on this project.\n' +
          '\n' +
          'Core Technology Stack:\n' +
          'Java, Kotlin, Spring Boot 2 (Cloud, Data, Security, etc.), Gradle\n' +
          'Angular, Typescript\n' +
          'PostgreSQL, Intersystems IRIS, Redis\n' +
          '\n' +
          'Most tricky tasks:\n' +
          '- A natural language processing algorithm for processing clinical notes, was implemented using the Apache Ruta' +
          ' Engine, InterSystems IKnow, and CTakes.\n' +
          '- I Make a rule management system for clinicians.\n' +
          '- I Developed a system for clinical recommendations by rules and patient medical records.' +
          '- I am familiar with a modern protocol for sharing patient data - FHIR.\n' +
          '\n' +
          'Besides writing code, I also do a code review of pull-requests for my team, develop technical specifications for tasks, help with coding.\n' +
          '\n' +
          'For task management, we use Atlassian Jira. For project management, agile methodologies such as Kanban (with some of scrum' +
          ' features) are used.\n',
        ru: 'Aluna Platform - облачная система для медиков, которая помогает им принимать клинические решения.\n' +
          '\n' +
          'Я начинал этот проект как единственный разработчик, за это время команда выросла до: 4 разработчиков, 2 QA, 1 UI/UX, 1 PM, 1' +
          ' CTO, 1 CEO.\n' +
          'Основной стек технологий:\n' +
          'Java, Kotlin, Spring Boot 2 (Cloud, Data, Security and so on), Gradle\n' +
          'Angular, Typescript\n' +
          'PostgreSQL, Intersystems IRIS, Redis\n' +
          '\n' +
          'Наиболее интересными задачами я могу выделить:\n' +
          '\n' +
          '- Разработка алгоритма и внедрение анализатора текста для обработки медицинских записей на основе Apache Ruta Engine, InterSystems IKnow и CTakes.\n' +
          '- Проектирование и реализация системы системы хранения правил для медицинских работников.\n' +
          '- Создание системы вычисления рекомендаций на основе записанных правил и медицинских данных пациента.\n ' +
          '- Понимаю и активно использую современный протокол передачи медицинских данных пациента - FHIR.\n' +
          '\n' +
          '\n' +
          'Помимо написания кода, я провожу код ревью пулл реквестов для всей моей команды, разрабатывают техническую спецификацию для поставленных задач, помогаю разрабатывать другим членам команды.\n' +
          '\n' +
          'Для планирования задач мы используем Atlassian Jira. Для проектного менеджмента используются гибкие методологии, в основном Kanban с некоторыми дополнениями из Scrum и XP.'
      },
      website: {
        buttonTitle: {en: 'Web site', ru: 'Сайт'},
        link: {en: 'https://www.alunahealth.com/', ru: 'https://www.alunahealth.com/'}
      }
    },
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }

  replaceNewLineWithHtmlBr(text: string) {
    return text.replace(/\n/g, '<br />');
  }

  trackByFn(index: number, item: Company) {
    if (item == null) {
      return null;
    }
    return item.name;
  }
}

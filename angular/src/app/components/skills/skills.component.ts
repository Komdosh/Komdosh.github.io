import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';

interface Skill {
  name: string;
  about: Array<{
    text: Translation,
    link?: string,
    buttonTitle?: string,
  }>;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Skills', ru: 'Навыки'};

  skills: Array<Skill> = [
    {
      name: 'Android',
      about: [
        {
          text: {
            en: 'Android SDK, Android Architecture Components, AndroidX, JetPack, Retrofit, Glide, ARCore, Navigation...',
            ru: 'Android SDK, Android Architecture Components, AndroidX, JetPack, Retrofit, Glide, ARCore, Navigation...'
          },
          link: 'https://play.google.com/store/apps/dev?id=8354123397424744150',
          buttonTitle: 'Google play',
        }
      ]
    },
    {
      name: 'SQL',
      about: [
        {
          text: {
            en: 'PostgreSQL, MySQL, SQLite. Joins, Indexes, Transactions, ACID',
            ru: 'PostgreSQL, MySQL, SQLite. Joins, Индексы, Транзакции, ACID'
          },
        },
      ]
    },
    {
      name: 'Spring',
      about: [
        {
          text: {
            en: 'Spring Boot, Cloud, Data, Security, Integration',
            ru: 'Spring Boot, Cloud, Data, Security, Integration'
          },
        },
      ]
    },
    {
      name: 'Frontend',
      about: [
        {
          text: {
            en: 'Angular, React, Redux, RxJS',
            ru: 'Angular, React, Redux, RxJS'
          },
        },
      ]
    },
    {
      name: 'API',
      about: [
        {
          text: {
            en: 'REST, GraphQL, Websocket',
            ru: 'REST, GraphQL, Websocket'
          },
        },
      ]
    },
    {
      name: 'Git',
      about: [
        {
          text: {
            en: 'Merge, Rebase, Amend, Pull Request...',
            ru: 'Merge, Rebase, Amend, Pull Request...'
          },
        },
      ]
    },
    {
      name: 'IDE',
      about: [
        {
          text: {
            en: 'Intellij IDEA, Android Studio, Visual Studio, Dev-Cpp, Clion, Rider, Golang, Pycharm...',
            ru: 'Intellij IDEA, Android Studio, Visual Studio, Dev-Cpp, Clion, Rider, Golang, Pycharm...'
          },
        },
      ]
    },
    {
      name: 'OS',
      about: [
        {
          text: {
            en: 'Mac OS X, Windows, Linux',
            ru: 'Mac OS X, Windows, Linux'
          },
        },
      ]
    },
    {
      name: 'CI/CD',
      about: [
        {
          text: {
            en: 'Teamcity, Jenkins, Bitbucket Pipeline, Github Actions',
            ru: 'Teamcity, Jenkins, Bitbucket Pipeline, Github Actions'
          },
        },
      ]
    },
    {
      name: 'Agile',
      about: [
        {
          text: {
            en: 'Scrum, Kanban, XP, Retro, Planning, ScrumPoker',
            ru: 'Scrum, Kanban, XP, Retro, Planning, ScrumPoker'
          },
        },
      ]
    },
    {
      name: 'Other',
      about: [
        {
          text: {
            en: 'SonarQube, Jetty, Tomcat, Docker, Heroku, AWS, Intersystems IRIS, Maven, Gradle, Apache POI',
            ru: 'SonarQube, Jetty, Tomcat, Docker, Heroku, AWS, Intersystems IRIS, Maven, Gradle, Apache POI'
          },
        },
      ]
    }
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }

  trackByFn(index: number, item: Skill) {
    if (item == null) {
      return null;
    }
    return item.name;
  }
}


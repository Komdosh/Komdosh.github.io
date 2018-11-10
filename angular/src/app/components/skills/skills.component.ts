import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends LanguageWrapper {

  sectionName: Translation = {en: 'Skills', ru: 'Навыки'};

  skills: Array<any> = [
    {
      name: 'Android',
      abouts: [
        {
          text: {en: 'Develop my own app SlaSol:', ru: 'Разработал собственное приложение SlaSol:'},
          link: 'https://play.google.com/store/apps/details?id=com.komdosh.slasol',
          buttonTitle: 'Google play',
        },
        {
          text: {
            en: 'Participated in development of new social app Travellante',
            ru: 'Участвовал в разработке социального приложения Travellante'
          },
        },
        {
          text: {
            en: 'Develop small apps just for fun',
            ru: 'Разрабатываю небольшие приложения просто ради развлечения'
          },
        },
      ]
    },
    {
      name: 'SQL',
      abouts: [
        {
          text: {en: 'Working with PostgreSQL, MySQL, SQLite', ru: 'Работаю PostgreSQL, MySQL, SQLite'},
        },
      ]
    },
    {
      name: 'Spring',
      abouts: [
        {
          text: {
            en: 'Java Spring Framework. Deal with it at work. Also know additional stuff like Spring Security and others',
            ru: 'Java Spring Framework. Имею с ним дело на работе'
          },
        },
      ]
    },
    {
      name: 'REST',
      abouts: [
        {
          text: {en: 'I Wrote some REST based servers', ru: 'Написал несколько серверов с использованием REST'},
        },
      ]
    },
    {
      name: 'HTML+CSS',
      abouts: [
        {
          text: {en: 'As you can see this site is a result of my skill', ru: 'Данный сайт должен всё рассказать об этом навыке'},
        },
      ]
    },
    {
      name: 'Git',
      abouts: [
        {
          text: {
            en: 'As you can see this site on Github, so I know what is checkout, clone, pull, push and so on',
            ru: 'Как вы могли заметить, этот сайт размещён на Github, так что я знаю что такое checkout, clone, pull, push и т.д.'
          },
        },
      ]
    },
    {
      name: 'IDE',
      abouts: [
        {
          text: {
            en: 'Use Intellij IDEA, Android Studio, Visual Studio, Dev-Cpp, Clion and know many others',
            ru: 'Использую Intellij IDEA, Android Studio, Visual Studio, Dev-Cpp, Clion и также пользовался многими другими'
          },
        },
      ]
    },
    {
      name: 'OS',
      abouts: [
        {
          text: {
            en: 'Use Mac OS X, Windows, Ubuntu Linux, sometimes use another dists like Gentoo, Kali, Debian and so on.',
            ru: 'Использую Mac OS X, Windows, Ubuntu Linux, пользовался и другими дистрибутивами такими как Gentoo, Kali, Debian.'
          },
        },
      ]
    },
    {
      name: 'CI',
      abouts: [
        {
          text: {
            en: 'Setup and worked with Jenkins and TeamCity',
            ru: 'Настраивал и работал с Jenkins и TeamCity'
          },
        },
      ]
    },
    {
      name: 'Agile',
      abouts: [
        {
          text: {
            en: 'I know what is Scrum, Kanban, because have a deal with it',
            ru: 'Знаю что такое Scrum, Kanban, потому что уже работал по этим принципам'
          },
        },
      ]
    },
    {
      name: 'Other',
      abouts: [
        {
          text: {
            en: 'Configure and worked with: Sonar qube, Jetty, Tomcat, Docker, Heroku, Apache POI',
            ru: 'Конфигурировал и работал с: Sonar qube, Jetty, Tomcat, Docker, Heroku, Apache POI'
          },
        },
      ]
    }
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}


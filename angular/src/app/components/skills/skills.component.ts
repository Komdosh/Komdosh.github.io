import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {Translation} from '../../model/Translation';

type Skill = {
  name: string,
  abouts: Array<{
    text: Translation,
    link?: string,
    buttonTitle?: string,
  }>
};

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
      abouts: [
        {
          text: {en: 'Develop my own app SlaSol:', ru: 'Разработал собственное приложение SlaSol:'},
          link: 'https://play.google.com/store/apps/details?id=com.komdosh.slasol',
          buttonTitle: 'Google play',
        },
        {
          text: {
            en: 'What I used for develop: Android SDK, Android Clean Architecture, AndroidX, JitPack, DataBinding, Room, Retrofit, Glide, Picasso, ARCore, Navigation',
            ru: 'Что я использовал в моих разработках:Android SDK, Android Clean Architecture, AndroidX, JitPack, DataBinding, Room, Retrofit, Glide, Picasso, ARCore, Navigation'
          },
        },
        {
          text: {
            en: 'Android it is kind of hobby for me, I develop small apps just for fun',
            ru: 'Android для меня выступает в качестве хобби, я разрабатываю небольшие приложения просто ради развлечения'
          },
        },
      ]
    },
    {
      name: 'SQL',
      abouts: [
        {
          text: {en: 'I\'m worked with PostgreSQL, MySQL, SQLite. I know what is left, right, inner, outer, anti joins; Indexes; Transactions; ACID', ru: 'Я работаю с PostgreSQL, MySQL, SQLite. Знаю что такое  left, right, inner, outer, anti joins; Индексы; Транзакции; ACID'},
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
          text: {
            en: 'I know what is GET, POST, PUT, DELETE, PATCH. I worked with http closely at my work. I wrote servers and clients as well. I wrote API servers',
            ru: 'Знаю что такое GET, POST, PUT, DELETE, PATCH. На работе близко познакомился с протоколом HTTP. Писал как сервера так и клиенты. Создавал API сервера'
          },
        },
      ]
    },
    {
      name: 'Git',
      abouts: [
        {
          text: {
            en: 'As you can see this site on Github, so I know what is checkout, clone, pull, push, rebase, merge and so on',
            ru: 'Как вы могли заметить, этот сайт размещён на Github, так что я знаю что такое checkout, clone, pull, rebase, merge, push и т.д.'
          },
        },
      ]
    },
    {
      name: 'IDE',
      abouts: [
        {
          text: {
            en: 'Use Intellij IDEA, Android Studio, Visual Studio, Dev-Cpp, Clion and used many others',
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
            en: 'Use Mac OS X, Windows, Ubuntu Linux, sometimes use another dists like CentOS, Debian and so on',
            ru: 'Использую Mac OS X, Windows, Ubuntu Linux, пользовался и другими дистрибутивами такими как CentOS, Debian и др.'
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
            en: 'I know what is Scrum, Kanban, XP, Retro, Planning, ScrumPoker and so on',
            ru: 'Знаю что такое Scrum, Kanban, XP, Retro, Planning, ScrumPoker и т.д.'
          },
        },
      ]
    },
    {
      name: 'Other',
      abouts: [
        {
          text: {
            en: 'I deployed and worked with: SonarQube, Jetty, Tomcat, Docker, Heroku, Apache POI',
            ru: 'Конфигурировал и работал с: SonarQube, Jetty, Tomcat, Docker, Heroku, Apache POI'
          },
        },
      ]
    }
  ];

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }

  trackByFn(index: number, item: Skill){
    if(item == null){
      return null
    }
    return item.name
  }
}


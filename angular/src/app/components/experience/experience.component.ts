import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent extends LanguageWrapper {

  sectionName: any = {en: 'Experience', ru: 'Опыт'};
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
        {en: 'Apache POI for reports automation', ru: 'Разработка архитектуры приложений'},
        {en: 'Map processing: shapefile, kml\\kmz', ru: 'Обработка карт: shapefile, kml\\kmz'},
        {en: 'DevOps', ru: 'DevOps'},
      ],
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

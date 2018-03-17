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

  name: Translation = {en: 'Tabakov Andrey', ru: 'Табаков Андрей Викторович'};

  position = 'Full-Stack Developer';

  aboutFirstPart: Translation = {
    en: 'Born May 12, 1996 in Saint-Petersburg, Russia',
    ru: 'Родился 12 мая 1996 года в Санкт-Петербурге.'
  };
  aboutSecondPart: Translation = {
    en: 'My interests is programming, studying, self-development, guitar playing, walking',
    ru: 'Мои интересы: Программирование, обучение, личное развитие, игра на гитаре и прогулки на свежем воздухе'
  };

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}

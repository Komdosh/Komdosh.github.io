import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';

@Component({
  selector: 'app-project-slider',
  templateUrl: './projectSlider.component.html',
  styleUrls: ['./projectSlider.component.css']
})
export class ProjectSliderComponent extends LanguageWrapper {

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
  }
}


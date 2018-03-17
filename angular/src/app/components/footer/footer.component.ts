import {Component} from '@angular/core';
import {InfoService} from '../../services/infoService';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {LanguageWrapper} from '../../languageWrapper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends LanguageWrapper {
  email: string;
  phone: string;


  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
    this.initInfo();
  }

  private initInfo() {
    this.email = this.infoService.getEmail();
    this.phone = this.infoService.getPhone();
  }
}


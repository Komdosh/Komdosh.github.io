import {Component} from '@angular/core';
import {LanguageWrapper} from '../../languageWrapper';
import {LanguageBroadcaster} from '../../services/languageHolder';
import {InfoService} from '../../services/infoService';
import {LinksToConnect} from '../../model/LinksToConnect';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent extends LanguageWrapper {
  linksToConnect: Array<LinksToConnect>;

  constructor(private infoService: InfoService, private languageBroadcaster: LanguageBroadcaster) {
    super(languageBroadcaster);
    this.initInfo();
  }

  private initInfo() {
    this.linksToConnect = this.infoService.getLinksToConnect();
  }
}


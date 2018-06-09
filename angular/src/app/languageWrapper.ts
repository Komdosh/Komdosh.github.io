import {LanguageBroadcaster} from './services/languageHolder';
import {LANGUAGE} from './model/constants/LANGUAGE';

export class LanguageWrapper {
  language: string = LANGUAGE.en;

  constructor(languageBroadcaster: LanguageBroadcaster) {
    this.language = languageBroadcaster.getLanguage();
    languageBroadcaster.getLanguageSubscription().subscribe(lang => {
      this.language = lang;
    });
  }
}

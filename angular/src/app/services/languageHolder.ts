import {Injectable} from '@angular/core';
import {LANGUAGE} from '../model/constants/LANGUAGE';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class LanguageBroadcaster {
  language = 'en';
  private subject = new Subject<any>();

  public getLanguage(): string {
    return this.language;
  }

  public changeLanguage(language?: any) {
    if (language != null) {
      this.language = language;
    } else {
      this.language = this.language === LANGUAGE.en ? LANGUAGE.ru : LANGUAGE.en;
    }

    this.subject.next(this.language);
  }

  public getLanguageSubscription(): Observable<any> {
    return this.subject.asObservable();
  }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ProjectSliderComponent} from './components/projectSlider/projectSlider.component';
import {InfoService} from './services/infoService';
import {LanguageBroadcaster} from './services/languageHolder';
import {PersonalInfoComponent} from './components/personalInfo/personalInfo.component';
import {EducationComponent} from './components/education/education.component';
import {ProgrammingComponent} from './components/prograiming/programming.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {SocialComponent} from './components/social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    PersonalInfoComponent,
    ProjectSliderComponent,
    ProgrammingComponent,
    SocialComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    InfoService,
    LanguageBroadcaster
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

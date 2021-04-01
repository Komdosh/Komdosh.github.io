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
import {ProgrammingComponent} from './components/programming/programming.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {SocialComponent} from './components/social/social.component';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {FormsModule} from '@angular/forms';
import {ImageViewerModule} from 'ngx-image-viewer';

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
    SkillsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ImageViewerModule.forRoot()
  ],
  providers: [
    InfoService,
    LanguageBroadcaster
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

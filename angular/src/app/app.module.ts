import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ProjectSliderComponent} from './components/projectSlider/projectSlider.component';
import {InfoService} from './services/infoService';
import {LanguageBroadcaster} from './services/languageHolder';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProjectSliderComponent
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
export class AppModule { }

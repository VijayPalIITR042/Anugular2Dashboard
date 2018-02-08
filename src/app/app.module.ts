import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { StandardBankCardComponent } from './standardBank/CardsComponent/standardBankCards.component';
import { StandardBankContentComponent } from './standardBank/ContentComponent/standardBankContent.component';
import { StandardBankHeaderComponent } from './standardBank/HeaderComponent/standardBankHeader.component';
import { StandardBankSideNavComponent } from './standardBank/NavComponent/standardBandSideNav.component';
 

import {DataService} from './Data-Service';

@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule 
                ],
  declarations: [ AppComponent, 
                  StandardBankHeaderComponent, 
                  StandardBankContentComponent, 
                  StandardBankSideNavComponent, 
                  StandardBankCardComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [DataService]
})
export class AppModule { }

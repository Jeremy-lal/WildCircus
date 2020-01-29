import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CirquePageComponent } from './pages/cirque-page/cirque-page.component';
import { LaTourneeComponent } from './pages/la-tournee/la-tournee.component';
import { BoutiqueComponent } from './pages/boutique/boutique.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CirquePageComponent,
    LaTourneeComponent,
    BoutiqueComponent,
    ContactComponent,
    AcceuilComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

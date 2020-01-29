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
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { RepresentationComponent } from './components/representation/representation.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ReservationComponent } from './pages/reservation/reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    CirquePageComponent,
    LaTourneeComponent,
    BoutiqueComponent,
    ContactComponent,
    AcceuilComponent,
    NavBarComponent,
    FooterComponent,
    SignInPageComponent,
    SignUpPageComponent,
    RepresentationComponent,
    ReservationPageComponent,
    AdminComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

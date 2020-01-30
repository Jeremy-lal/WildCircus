import { ReservationComponent } from './components/reservation/reservation.component';
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
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RepresentationComponent } from './components/representation/representation.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserReservationPageComponent } from './pages/user-reservation-page/user-reservation-page.component';
import { RepreAdminComponent } from './components/repre-admin/repre-admin.component';
import { RepresentationFormComponent } from './components/representation-form/representation-form.component';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';




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
    AdminComponent,
    UserReservationPageComponent,
    RepreAdminComponent,
    RepresentationFormComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
  entryComponents: [RepresentationFormComponent, ReservationComponent]

})

export class AppModule { }

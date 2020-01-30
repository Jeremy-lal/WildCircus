import { UserReservationPageComponent } from './pages/user-reservation-page/user-reservation-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { LaTourneeComponent } from './pages/la-tournee/la-tournee.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CirquePageComponent } from './pages/cirque-page/cirque-page.component';
import { BoutiqueComponent } from './pages/boutique/boutique.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AuthGuard } from './core/auth.guard';
import { AdminGuard } from './core/admin.guard';


const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'boutique', component: BoutiqueComponent},
  {path: 'cirque', component: CirquePageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tournee', component: LaTourneeComponent},
  {path: 'signin', component: SignInPageComponent},
  {path: 'signup', component: SignUpPageComponent},
  {path: 'profil', component: UserReservationPageComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

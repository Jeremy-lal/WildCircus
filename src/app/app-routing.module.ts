import { LaTourneeComponent } from './pages/la-tournee/la-tournee.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CirquePageComponent } from './pages/cirque-page/cirque-page.component';
import { BoutiqueComponent } from './pages/boutique/boutique.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'boutique', component: BoutiqueComponent},
  {path: 'cirque', component: CirquePageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tournee', component: LaTourneeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

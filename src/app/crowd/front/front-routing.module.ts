import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjetComponent} from './projet/projet.component';
import { AjouterProjetComponent} from './ajouter-projet/ajouter-projet.component';
import {PaiementComponent} from './paiement/paiement.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projet/:id',
    component: ProjetComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'ajouter-projet',
    component: AjouterProjetComponent
  },
  {
    path: 'paiement/:id',
    component: PaiementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }

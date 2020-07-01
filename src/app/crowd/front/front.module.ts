import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjetComponent } from './projet/projet.component'; 
import {AjouterProjetComponent} from './ajouter-projet/ajouter-projet.component';
import { PaiementComponent } from './paiement/paiement.component';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HomeComponent, ProjetComponent,AjouterProjetComponent,PaiementComponent, ProfileComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    NgxChartsModule,
    FormsModule
    
  ]
})
export class FrontModule { }

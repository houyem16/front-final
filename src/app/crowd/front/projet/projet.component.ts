
import { Component, OnInit } from '@angular/core';
import {Projet} from '../../classes/projet';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  single: any[];
  view: any[] = [500, 400];

  // options
  showLegend = true;
  showLabels = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  currentPage = 'About';
  projet: Projet = new Projet();

  constructor() {
   this.single = [
     {
       "name": "Germany",
       "value": 40632,
       "extra": {
         "code": "de"
       }
     }
   ];
  }

  ngOnInit() {

    this.projet = {
      id_projet: 1, categorie: {id_categorie: 1, nom_categorie: 'association'},
      budget_prevu: 3000, date_fin_prevu: '30/11/2021', description: 'ceci est un projet',
      porteur_projet: {email: 'a@a.com', id_utilisateur: 1, nom: 'test', prenom: 'test 2'}, resume: 'resumee', somme_collectee: 200,
      somme_min: 1000, titre_projet: '9offet romdhan', image_url: 'https://www.cha9a9a.tn/media/cache/cha9a9a_pic/uploads/images/a47b1a71dc353e90bc4dc6fafcfece8a04237b19.png'
    };
  }

  onSelect(event) {
    console.log(event);
  }

  showPage(page: string) {
    this.currentPage = page;
  }

}


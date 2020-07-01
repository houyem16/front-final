
import { Component, OnInit } from '@angular/core';
import {Projet} from '../../classes/projet';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from 'app/crowd/providers/projet.service';
import { UtilisateurService } from 'app/crowd/providers/utilisateur.service';
import { Client } from 'app/crowd/classes/client';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  single: any[];
  view: any[] = [400, 300];
  selected_project_id: number;

  // options
  showLegend = true;
  showLabels = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  currentPage = 'About';
  projet: Projet = new Projet();
  utilisateur: Client = new Client();
  

  constructor(private route: ActivatedRoute, private prj_serv: ProjetService, public userserv: UtilisateurService) {
   this.projet.owner = new Client();
    this.single = [
     {
       "name": "collecté",
       "value": 40632,
      } ,
       {
        "name": "reste",
        "value": 20632,
      
     }
   ];
  }

  ngOnInit() {
      this.route.params.subscribe(
        params => {
            this.selected_project_id = +params['id'];
            this.prj_serv.get_projet(this.selected_project_id).subscribe(
              (res) => {
                this.projet = res;
              }
            );
                  }
      ); 

      this.userserv.detailuser(this.userserv.get_email()).subscribe(
        (res) => {
          this.utilisateur = res;
        }
      );
      
      
  }

  onSelect(event) {
    console.log(event);
  }

  showPage(page: string) {
    this.currentPage = page;
  }

}


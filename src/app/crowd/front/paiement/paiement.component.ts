import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from 'app/crowd/providers/projet.service';
import { UtilisateurService } from 'app/crowd/providers/utilisateur.service';
import { Projet } from 'app/crowd/classes/projet';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements OnInit {

  projet: Projet = new Projet();

  constructor(private route: ActivatedRoute, private prj_serv: ProjetService, public userserv: UtilisateurService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
      
          this.prj_serv.get_projet(+params['id']).subscribe(
            (res) => {
              this.projet = res;
            }
          );
                }
    ); 
  }

}

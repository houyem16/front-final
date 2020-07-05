import { Component, OnInit } from '@angular/core';
import { Client } from 'app/crowd/classes/client';
import { UtilisateurService } from 'app/crowd/providers/utilisateur.service';
import { Projet } from 'app/crowd/classes/projet';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  montant: number;
  constructor(private userserv: UtilisateurService) {
    this.montant = 50;
   }

 
    //Variable Declaration
    currentPage: string = "About";

    client: Client= new Client();

    projets: Projet[] = [];

    ngOnInit() {
      this.userserv.detailuser(this.userserv.get_email()).subscribe(
        (res) => {
          this.client = res;
        }
      );

      this.userserv.userprojets(this.userserv.get_email()).subscribe(
        (res) => {
          this.projets = res;
        }
      );
    }

    showPage(page: string) {
        this.currentPage = page;
    }

    alimenter() {
      this.userserv.alimenter(this.montant, this.client.id_utilisateur).subscribe(
        (res) => {
          alert(res.status);
        }
      );
    }

}

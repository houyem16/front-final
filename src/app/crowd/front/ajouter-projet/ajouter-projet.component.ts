//import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../providers/projet.service';
import {Projet} from '../../classes/projet';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.scss']
})
export class AjouterProjetComponent {
  @ViewChild('f', {static: false}) ajouterprojetForm: NgForm;
  nprojet: Projet = new Projet();
  constructor(private router: Router, private projetserv: ProjetService) {

  }

  //constructor() { }

  ngOnInit(): void {
  }

  ajouterp() {
    //console.log(this.nuser);
    this.projetserv.ajouterp(this.nprojet).subscribe(
        (res) => {
            if (res.status === true) {
                alert('projet cree avec success');
                
            } else {
                alert('echec creation projet');
            }
        }
    );
    }   

}

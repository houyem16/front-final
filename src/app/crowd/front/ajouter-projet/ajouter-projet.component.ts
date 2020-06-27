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
  somme_min = 0;
  fileToUpload: File = null;
  constructor(private router: Router, private projetserv: ProjetService) {

  }

  //constructor() { }

  ngOnInit(): void {
  }

  get_somme_min() {
    let sommemin = 0;
      if (this.nprojet.budget_prevu != null && this.nprojet.budget_prevu != undefined) {
          sommemin = this.nprojet.budget_prevu * 20 / 100;
      }
      return sommemin;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.savetoserver();
  }

  savetoserver() {
    const formData: FormData = new FormData();
    console.log(this.fileToUpload);
    formData.append('image', this.fileToUpload, this.fileToUpload.name);
    this.projetserv.saveimage(formData).subscribe(
        (res) => {
          if (res.status === true) {
              this.nprojet.image_url = res.msg;
          } else {
              alert('erreur upload');
          }
        }
    );
  }

  ajouterp() {
    console.log(this.nprojet);
    //return false;
    this.projetserv.ajouterp(this.nprojet).subscribe(
        (res) => {
            if (res.status === true) {
                alert('projet cree avec success');
                
            } else {
                alert('echec creation projet');
            }
        }, (err) => {
            alert('erreur insertion');
        }
    );
    }   

}

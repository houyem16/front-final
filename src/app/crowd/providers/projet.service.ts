import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Projet} from '../classes/projet';
import {Serverrepense} from '../classes/serverrepense';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  urlapi = environment.api;

  constructor(private http: HttpClient) { }

  get_all_projets() {
    return this.http.get<Projet[]>(`${this.urlapi}projet`);
  }

  saveimage(formdatas) {
    return this.http.post<Serverrepense>(`${this.urlapi}uploadimage`, formdatas);
  }

  get_projet(idprojet) {
    return this.http.get<Projet>(`${this.urlapi}projet/${idprojet}`);
  }

   ajouterp(projet){
    return this.http.post<Serverrepense>(`${this.urlapi}ajouterprojet`, {projet: projet});
   }
}

import {Categorie} from './categorie';
import {Client} from './client';

export class Projet {
    id_projet: number;
    titre_projet: string;
    description: string;
    budget_prevu: number;
    somme_collectee: number;
    resume: string;
    date_fin_prevu: string;
    somme_min: number;
    categorie: Categorie;
    porteur_projet: Client;
    image_url: string;
    portee: string;
}

/*
id_projet int(11) not null auto_increment,
titre_projet varchar(45) ,
description varchar(45) ,
budget_prevu double(18,3),
somme_collectee double(18,3),
resume varchar(45) ,
date_fin_prevu Date,
somme_min double(18,3),
id_categorie int(11),
id_adresse int(11),
porteur_projet int(11),
 */

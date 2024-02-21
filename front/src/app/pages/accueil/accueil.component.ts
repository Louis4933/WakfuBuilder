import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  titre : string = "Bienvenue sur Wakfu Builder !";
  soustitre : string = "Le site de création de build pour le jeu Wakfu";
  description : string = "Wakfu Builder est un site qui vous permet de créer des builds pour le jeu Wakfu. Vous pourrez y trouver des builds créés par d'autres joueurs, ou bien créer les vôtres. Vous pourrez également consulter la liste des items du jeu, et voir les statistiques de chacun d'entre eux. N'oubliez pas de vous inscrire, afin de pouvoir accéder à vos builds uniquement dans un espace dédié !";

}

# Générateur de Builds pour Wakfu
Ce projet est une application web conçue pour faciliter la création de builds pour les joueurs du MMORPG Wakfu. Les builds, qui représentent des configurations d'équipement dans le jeu, sont souvent complexes à concevoir et à optimiser. Cette application vise à simplifier ce processus en permettant aux utilisateurs de générer automatiquement des builds personnalisés en fonction de leurs besoins et de leurs préférences.

# Objectifs de l'application
Les principaux objectifs de cette application sont les suivants :

* Offrir aux joueurs de Wakfu un outil convivial et intuitif pour créer et personnaliser leurs builds.
* Utiliser les dernières technologies de développement pour garantir des performances optimales et une expérience utilisateur fluide.
* Implémenter un procédé de génération de builds basé sur les spécificités du jeu.

# Technologies Utilisées
Le projet est développé en utilisant les technologies suivantes :

* Spring Boot pour le développement du backend. Spring Boot offre une plateforme robuste et flexible pour la création d'applications Java basées sur des services.
* Angular pour le développement du frontend. Angular est un framework JavaScript moderne et puissant pour la création d'interfaces utilisateur dynamiques et réactives.
* MongoDB comme système de gestion de base de données NoSQL. MongoDB offre une grande flexibilité pour stocker et manipuler les données de manière efficace.
* Docker pour le déploiement de l'application.

# Prérequis
Avant de lancer l'application, assurez-vous d'avoir installé Docker et Docker Compose sur votre système.

# Installation et utilisation

## Clonez ce dépôt Git sur votre machine locale en utilisant la commande suivante :
```bash
git clone https://github.com/Louis4933/WakfuBuilder.git
```

## Naviguez vers le répertoire cloné :
```bash
cd WakfuBuilder/
```

## Lancer l'application :
```bash
docker-compose up
```

## Arrêter l'application :
```bash
Ctrl+C ou docker-compose down
```

## Supprimer l'application
```bash
docker-compose down --rmi all -v
```

# To do
- améliorer le style
- getStats()
- pouvoir cliquer sur un item dans l'aperçu
- optimiser la génération grâce au problème du sac à dos
- crypter les passwords
- opérations crud sur un build
- mettre le bon ordre dans les bonus
- dans la rgpd
- bug d'affichage lors de la génération d'un build
- github pages pour le déploiement 

---
## Note de fin

Merci à [Tarchaud](https://github.com/Tarchaud) pour sa contribution précieuse à ce projet, qui était à la base un projet de fin d'études réalisé avec lui. 


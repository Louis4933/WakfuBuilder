# Documentation Data

[La documentation crée par la communauté.](https://www.wakfu.com/fr/forum/467-developpement/416776-json-mini-guide-utilisation)

## Item

### Item Rarity

Voici à quoi correspond la valeur de la variable rarity :

```js
{
    0: "Commun",
    1: "Inhabituel",
    2: "Rare",
    3: "Mythique",
    4: "Légendaire",
    5: "Relique",
    6: "Souvenir",
    7: "Epique"
}
```

## Action

### Element

Voici à quoi correspond les morceaux de string dans les descriptions des actions  

```json
{
    "[el1]": "Feu",
    "[el2]": "Eau",
    "[el3]": "Terre",
    "[el4]": "Air",
}
```

### Parsing des descriptions des actions dans le front

On utilise le module NodeJs `Waktrinser` qui permet de remplacer les arguments dans la description d'une action.
Ce module a été créé par une personne de la communauté.
[lien du GitLab](https://gitlab.com/methodwakfu-public/waktrinser)

```ts
//Exemple avec la description  'Renvoie |[#7.3]*100|% des dégâts'
import Waktrinser from '@methodwakfu-public/waktrinser';
console.log(Waktrinser.decodeString('Renvoie |[#7.3]*100|% des dégâts', [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0.001], 100));

//Sortie de la fonction
'Renvoie 10% des dégâts'
```

### Récupération des images des items
Les images des items sont récupérées via l'api d'une personne de la communauté à créer.
[Lien du GitHub](https://github.com/Vertylo/wakassets)

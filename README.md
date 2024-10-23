# RGAA 4 : Impacts utilisateurs des différents critères

Ce site vise à expliciter les objectifs des différents critères du RGAA (dans sa version 4.1.2) au travers du ou des impacts causés aux personnes handicapées par un défaut d'accessibilité.
Purement informatif et non normatif, ce site ne fournit pas une liste exhaustive de tous les impacts. Il essaye néanmoins d'être le plus complet et le plus clair possible dans ses explications.

## Exécuter le site en local

### Prérequis

Ce site utilise le générateur de site [Jekyll](https://jekyllrb.com/) intégré à la fonctionnalité [GitHub Pages](https://docs.github.com/fr/enterprise-cloud@latest/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll).

Pour exécuter le site en local, il faut installer :

- [Git](https://docs.github.com/fr/enterprise-cloud@latest/get-started/getting-started-with-git/set-up-git) ;
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) ;
- et [Jekyll](https://jekyllrb.com/docs/installation/).

### Démarrer le projet

1. Ouvrir le terminal ;
2. Se placer à la racine du dépôt ;
3. Installer les dépendances : `bundle install` ;
4. Démarrer le projet : `bundle exec jekyll serve` ;
5. [Visualiser le rendu](http://127.0.0.1:4000/rgaa4-impacts-utilisateurs/) dans votre navigateur.

#### Spécificité macOS

Si vous rencontrez l'erreur  `bundler: failed to load command: jekyll`, il y a fort à parier que cela soit dû au fait que [votre version de Ruby n'embarque pas webrick](https://stackoverflow.com/questions/69890412/bundler-failed-to-load-command-jekyll#answer-70916831).
Pour corriger le problème, il suffit d'installer manuellement webrick via la commande `bundle add webrick` avant d'exécuter `bundle exec jekyll serve`.

## Documentation technique

### Données

Les données sont stoqués dans le répertoire `_data`.

#### Format des données des impacts

Les impacts utilisateurs sont structurés au format JSON. Voir fichier `_data/impact_users.json`

```JS
{
  "name": "", /** Nom de l'impact (String) */
  /** Liste des impacts "originaux" */
  "default": [
    {
      "description": "", /** Description de l'impact (String Markdown) */
      /** Critères associés à l'impact par référentiel (Objet JS) */
      "criteria": {
        "rgaa": ["1.1","1.3"], /** Liste des numéros des critères RGAA associés (Array de String) */
        "raweb": ["1.1","1.3"], /** Liste des numéros des critères RAWeb associés (Array de String) */
        "wcag": [] /** Liste des numéros des critères WCAG associés (Array de String) */
      }
    }
  ],
  /** Liste des impacts au format FALC */
  "falc": [
    {
      "description": "", /** Description de l'impact (String Markdown) */
      /** Critères associés à l'impact par référentiel (Objet JS) */
      "criteria": {
        "rgaa": ["1.1","1.3"], /** Liste des numéros des critères RGAA associés (Array de String) */
        "raweb": ["1.1","1.3"], /** Liste des numéros des critères RAWeb associés (Array de String) */
        "wcag": [] /** Liste des numéros des critères WCAG associés (Array de String) */
      }
    }
  ],
  /** Thématiques associés à l'impact par référentiel (Objet JS) */
  "topics": {
    "rgaa": ["1"], /** Liste des numéros des thématiques RGAA associés (Array de String) */
    "raweb": ["1"], /** Liste des numéros des thématiques RAWeb associés (Array de String) */
    "wcag": ["1"] /** Liste des numéros des thématiques WCAG associés (Array de String) */
  }
},
```

Les textes de description de chaque impact sont rédigés au format markdown (abrégé MD). Pour vous aider dans la rédaction et la correction, voici un [guide de syntaxe markdown](https://docs.framasoft.org/fr/grav/markdown.html).

Le format MD permet de créer des paragraphes via des doubles sauts de lignes. Hors, les sauts de lignes ne sont pas autorisés au sein de chaines de caractères simple stockées dans le fichier JSON. Il faut utiliser des caractères spéciaux :

* `\n`: Saut de ligne simple. Génère un élément `<br>`.
* `\nn`: Saut de ligne double. Ouvre un nouvel un élément `<p>`.
* `\nn---\nn`: Génère un élément `<hr>`.

#### Format des données des référentiels

Les référentiels sont structurés au format JSON. Voir fichier `_data/rgaa_4_1_2_clean.json`.

Leur architecture est similaire, qu'il s'agisse du RGAA, RAWeb ou WCAG. Elle permet même de cumuler plusieurs versions d'un même référentiel au besoin.

```JS
{
  name: "" /** Nom du standard en minuscules ("rgaa", "raweb", "wcag") */
  version: "" /** Numéro de version du standard (format String. Exemple: "4.1.2") */
  url: "" /** Adresse de la page du standard */
  /** Niveau le plus haut de regroupement de critères. Thématiques (tableau d'Objets) */
  topics: [
    num: "" /** Numéro de la thématique */
    name: "" /** Nom / titre de la thématique */
    description?: "" /** Référentiel WCAG uniquement. Description détaillée de la thématique */
  ]
  /** Référentiel WCAG uniquement. Inexistant dans le RGAA. Regroupe les critères. (tableau d'Objets) */
  guidelines?: [
    {
      topicNum: "" /** Référence au numéro de guideline dans lequel le critère est catégorisé. */
      num: "" /** Numéro de la guideline */
      name: "" /** Nom / titre de la guideline */
      description?: "" /** Description détaillée de la guideline. */
    }
  ]
  /** Données des critères (tableau d'Objets) */
  criteria: [
    {
      topicNum: "" /** Référence au numéro de thématique dans lequel le critère est catégorisé. */
      guidelineNum?: "" /** Référentiel WCAG uniquement. Référence au numéro de guideline dans lequel le critère est catégorisé. */
      num: "" /** Numéro du critère au format thématique.(guideline.)critère */
      name: "" /** Nom / titre du critère */
      description?: "" /** Référentiel WCAG uniquement. Description détaillée du critère. */
      level?: "" /** Référentiel WCAG uniquement. Niveau du critère "A", "AA" ou "AAA". */
    }
  ]
}
```

## Licence

<a rel="license" href="https://creativecommons.org/licenses/by/4.0/deed.fr"><img alt="Licence Creative Commons 4.0" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png" width="118" height="41" /></a>

Le présent contenu est placé sous [licence Creative Commons CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.fr). Il s'agit d'une refonte en profondeur du guide [Défauts d’accessibilité : Impacts sur les utilisateurs](https://disic.github.io/guide-impacts_utilisateurs/) édité par la DInSIC (devenue depuis lors la DINUM).
Les contenus originaux sont accessibles sur le dépôt git suivant : [DISIC/guide-impacts_utilisateurs](https://github.com/DISIC/guide-impacts_utilisateurs).

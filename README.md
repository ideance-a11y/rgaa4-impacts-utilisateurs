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

## Licence

<a rel="license" href="https://creativecommons.org/licenses/by/4.0/deed.fr"><img alt="Licence Creative Commons 4.0" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png" width="118" height="41" /></a>

Le présent contenu est placé sous [licence Creative Commons CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.fr). Il s'agit d'une refonte en profondeur du guide [Défauts d’accessibilité : Impacts sur les utilisateurs](https://disic.github.io/guide-impacts_utilisateurs/) édité par la DInSIC (devenue depuis lors la DINUM).
Les contenus originaux sont accessibles sur le dépôt git suivant : [DISIC/guide-impacts_utilisateurs](https://github.com/DISIC/guide-impacts_utilisateurs).

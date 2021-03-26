# lil-seed

## Configurer le pot
Les script du pot sont présent dans le dossier hardware.
Pour démarrer le pot, il faut tout d'abord copier le fichier `ifstate` dans `/run/network/ifstate` et `interfaces` dans `/etc/network/interfaces`. Nous vous conseillons de redémarrer le raspberry (attention, le redémarrage peut être long, car l'interface `wlan0-home`, générée par le script, n'est pas encore créée à ce moment).

Ensuite, il faut installer les dépendences et configurer l'env:
```
pip3 install python-wifi flask dht11
```

Ensuite, il faut lancer le serveur flask
```
export FLASK_APP=webserver
export FLASK_ENV=developement
```

Vous pouvez accèder à la page web sur `localhost:5000`

## Lancer le backend

Installez les dépendences et lancez le projet
```
yarn
yarn start
```

## Lancer le frontend

Installez les dépendences et lancez le projet
```
yarn
ng serve
```

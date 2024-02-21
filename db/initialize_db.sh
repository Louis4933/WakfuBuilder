#!/bin/bash

echo "Initialisation de la base de données avec tous les fichiers JSON du dossier"

for filename in /docker-entrypoint-initdb.d/*.json; do
    collection=$(basename "$filename" .json)
    echo "Importation du fichier $filename dans la collection $collection"
    mongoimport --db WakfuBuilder_db --type json --collection "$collection" --file "$filename" --jsonArray
done
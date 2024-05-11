https://tailwindcss.com/docs/installation

ou cette video explicative très bien faite et en français
(à lire avant le howto car explication des ligne de commande de l'instalaltion):
https://www.youtube.com/watch?v=n3nSu2gUYiM


ICI :
Installation : npm install -D tailwindcss
Creation du fichier tailwind.config.js : npx tailwindcss init

NOTE : "npx" permet d'exécuter des commandes de modules npm sans avoir à les installer globalement.

NOTE 2 :
-i ./src/input.css: Spécifie le fichier d'entrée où vous avez écrit votre CSS. Dans cet exemple, le fichier d'entrée est input.css situé dans le répertoire src.

-o ./src/output.css: Spécifie le fichier de sortie où Tailwind CSS écrira le CSS généré. Dans cet exemple, le fichier de sortie est output.css situé dans le répertoire src.

--watch: Cette option permet à Tailwind CSS de surveiller les modifications dans votre fichier d'entrée et de régénérer automatiquement le CSS de sortie chaque fois que vous enregistrez des modifications.
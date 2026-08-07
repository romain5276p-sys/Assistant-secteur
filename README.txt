ASSISTANT SECTEUR — V1.3 MULTI-TÉLÉPHONES

Nouveautés :
- Synchronisation entre plusieurs téléphones via Supabase.
- Profil par appareil : Responsable / Opérateur 1 / Régleur.
- Priorités, arrêts, affectations et historique partagés.
- Une affectation responsable arrive sur le téléphone concerné.
- L'opérateur peut Accepter ou Demander maintenance.
- Mode local conservé si la synchro n'est pas configurée.

MISE EN PLACE RAPIDE :
1. Déployer index.html, manifest.json et sw.js sur GitHub Pages comme avant.
2. Créer un projet gratuit sur Supabase.
3. Dans Supabase > SQL Editor, exécuter le fichier supabase_setup.sql fourni.
4. Récupérer Project URL et la clé anon/publishable dans les réglages API.
5. Dans l'app, toucher le badge "Local" en haut à droite.
6. Sur les deux téléphones, entrer la même URL, la même clé et le même "Code secteur".
7. Choisir Responsable sur ton téléphone et Opérateur 1 sur le deuxième.
8. Enregistrer et synchroniser.

IMPORTANT : V1.3 est un prototype de test. Utiliser un code secteur long et non devinable. Ne pas y stocker d'informations sensibles/confidentielles.

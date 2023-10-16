import js from "../assets/logos/js.png";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import sass from "../assets/logos/sass.png";
import react from "../assets/logos/react.png";
import redux from "../assets/logos/redux.png";
import tailwind from "../assets/logos/tailwind.png";
import vscode from "../assets/logos/vscode.png";
import git from "../assets/logos/git.png";
import figma from "../assets/logos/figma.png";
import swagger from "../assets/logos/swagger.png";
import node from "../assets/logos/node.png";
import mongo from "../assets/logos/mongoDB.png";
import npm from "../assets/logos/npm.png";
import vite from "../assets/logos/Vitejs.png";
import jest from "../assets/logos/jest.png";

const Data = [
  {
    image: space,
    title: "Ohmyfood",
    link: "https://boby-front.github.io/Ohmyfood/",
    github: "https://github.com/boby-front/Ohmyfood.git",
    description:
      "Réalisation d'une présentation captivante de restaurants luxueux en utilisant HTML, Sass et des animations. Ce projet met en avant l'élégance et l'atmosphère raffinée des établissements, offrant ainsi une expérience visuelle immersive.",
    pointFort:
      " • Présentation visuellement attractive des restaurants luxueux\n • Utilisation de Sass pour une gestion efficace des styles et une meilleure maintenabilité\n • Intégration d'animations pour dynamiser l'interface\n • Conception responsive pour une expérience utilisateur fluide sur tous les appareils ",
    logo: [html, sass],
  },
  {
    image: vaisseau,
    title: "Sophie-Bluel",
    github: "https://github.com/boby-front/sophie-bluel.git",
    description:
      "Création d'un site d'architecte avec une gestion d'administrateur en JavaScript. Ce projet offre à l'architecte la possibilité d'ajouter et de supprimer ses travaux via une API, facilitée par l'utilisation de Swagger. De plus, le site est optimisé dynamiquement pour garantir une expérience utilisateur fluide.",
    pointFort:
      " • Site web professionnel pour un architecte avec une interface esthétique\n • Gestion d'administrateur permettant à l'architecte d'ajouter et de supprimer des travaux\n • Utilisation de JavaScript pour la logique côté client et les interactions dynamiques\n • Intégration d'une API et utilisation de Swagger pour faciliter la gestion des travaux\n • Optimisation dynamique pour une performance améliorée du site",
    logo: [html, css, js, node],
  },
  {
    image: fusée,
    title: "Nina-Carducci",
    link: "https://boby-front.github.io/Nina-Carducci/",
    github: "https://github.com/boby-front/Nina-Carducci.git",
    description:
      "Création d'un site de photographe en HTML, CSS et JavaScript, avec une attention particulière portée sur l'amélioration des performances, de l'accessibilité et du référencement. Ce projet offre une expérience utilisateur fluide, un accès facile pour tous et une visibilité optimale sur les moteurs de recherche.",
    pointFort:
      " • Amélioration des performances pour un chargement rapide des images et des pages\n • Mise en place de bonnes pratiques d'accessibilité pour une expérience inclusive\n • Optimisation du référencement pour une visibilité accrue dans les moteurs de recherche\n • Utilisation de HTML sémantique, CSS optimisé et JavaScript optimisé pour une meilleure performance",
    logo: [html, css, js],
  },
  {
    image: image,
    title: "KASA",
    link: "https://projet-kasa.netlify.app/",
    github: "https://github.com/boby-front/kassa.git",
    description:
      "Réalisation d'un site web complet pour une agence de location en utilisant React.js, Sass et des fonctionnalités avancées telles qu'un carrousel et l'affichage des profils des propriétaires. Ce projet offre une expérience utilisateur interactive et immersive en permettant aux utilisateurs de parcourir les offres de location, de visualiser des images attrayantes dans des carrousels et de découvrir les profils détaillés des propriétaires.",
    pointFort:
      " • Site web dynamique et réactif, construit avec React.js\n • Utilisation de Sass pour une gestion optimisée des styles\n • Présentation attrayante des propriétés à louer sur plusieurs pages\n • Carrousel interactif pour une visualisation aisée des images\n • Affichage des profils des propriétaires dynamiquement via un fichier de données",
    logo: [html, css, react, js, node],
  },
  {
    image: image,
    title: "724events",
    link: "https://77events.netlify.app/",
    github: "https://github.com/boby-front/724events.git",
    description:
      "724events est un site web one-page qui a été développé pour l'agence événementielle 724events. L'objectif de ce projet était de déboguer et finaliser le site web, qui avait été partiellement intégré par un développeur précédent. Le site est maintenant entièrement fonctionnel et prêt à être publié. Le code source a été soigneusement révisé pour résoudre tous les problèmes et bugs qui entravaient l'expérience des visiteurs. Les tests unitaires ont été mis en place pour garantir la qualité du code et la stabilité du site.",

    pointFort:
      " • Débogage complet du site web, résolution de tous les problèmes\n • Finalisation de l'intégration, garantissant le bon usage par les visiteurs\n • Tests unitaires pour assurer la qualité du code\n  • Préparation d'un cahier de recette exhaustif pour vérifier la performance du site\n • Livraison d'un site prêt à être publié et à offrir une expérience utilisateur optimale",
    logo: [html, css, js, react, jest],
  },
  {
    image: image,
    title: "Les petits plats ",
    link: "https://mes-petits-plats.netlify.app/",
    github: "https://github.com/boby-front/Les-petits-plats.git",
    description:
      "Ce projet consiste à implémenter une fonctionnalité de recherche performante pour un site de recettes de cuisine développé en utilisant React.js. L'objectif principal est d'offrir aux utilisateurs une expérience de recherche rapide et quasi instantanée. La mission comprend la conception et l'implémentation de deux versions distinctes de l'algorithme de recherche, l'une basée sur des boucles natives (while, for...) et l'autre utilisant la programmation fonctionnelle avec les méthodes de l'objet array (foreach, filter, map, reduce) de React.js. Les performances de ces deux implémentations seront comparées pour choisir la meilleure solution. En plus de l'implémentation, un document d'investigation de fonctionnalité sera créé pour décrire en détail les deux versions de l'algorithme et recommander la meilleure solution.",

    pointFort:
      " • Implémentation de l'algorithme de recherche avec mots clefs en React.js\n  • Respect des bonnes pratiques de Green Code\n • Sécurité du site, en évitant les risques d'injection de balises HTML ou de failles de sécurité\n • Collaboration étroite avec l'équipe Back-end pour l'adaptation future de la fonctionnalité",
    logo: [react, javascript, html, css],
  },
  {
    image: image,
    title: "Argent Bank",
    github: "https://github.com/boby-front/Argent-Bank.git",
    description:
      "Ce projet consiste à développer une application web complète et responsive pour l'authentification des utilisateurs en utilisant React et Redux. Le projet débute à partir du code HTML statique et du CSS fournis pour les pages d'accueil, de connexion et de profil. L'application offre les fonctionnalités suivantes : les utilisateurs peuvent visiter la page d'accueil, se connecter au système, se déconnecter, et accéder à leurs informations de profil après une connexion réussie. Le projet est basé sur une architecture Redux pour gérer l'état global de l'application. Toutes les routes API nécessaires ont été préparées par l'équipe back-end.",

    pointFort:
      " • Développement complet de l'application web en utilisant React et Redux\n • Intégration du code HTML statique et du CSS pour créer une interface responsive\n • Gestion de l'état global de l'application avec Redux\n • Utilisation des meilleures pratiques de Green Code, optimisation des images et création de composants réutilisables\n • Collaboration avec l'équipe back-end pour s'assurer de la préparation des routes API\n • Préparation d'un document Swagger décrivant les routes API pour les transactions dans la phase 2 du projet",
    logo: [react, redux, javascript, html, css, mongo],
  },
  {
    image: image,
    title: "E-commerce",
    link: "Lien vers l'application de panier",
    github: "Lien vers le référentiel GitHub",
    description:
      "Ce projet consiste à développer un système de panier d'achats interactif en utilisant React.js et Redux Toolkit. L'application permet aux utilisateurs d'ajouter des articles à leur panier, de gérer les quantités et de supprimer des articles du panier. L'état global du panier est géré efficacement avec Redux Toolkit, garantissant une expérience utilisateur fluide. Le total des achats et le nombre d'articles dans le panier sont automatiquement mis à jour à mesure que les utilisateurs effectuent des actions. Ce projet est conçu pour offrir une expérience de magasinage conviviale et intuitive.",

    pointFort:
      " • Développement d'un système de panier d'achats interactif avec React.js\n • Utilisation de Redux Toolkit pour gérer l'état global du panier\n • Ajout, gestion des quantités et suppression d'articles du panier\n • Mise à jour automatique du total et du nombre d'articles dans le panier\n • Interface utilisateur conviviale et réactive\n • Possibilité d'explorer le code source sur GitHub",
    logo: [react, redux, javascript, html, css],
  },
];

export { Data };

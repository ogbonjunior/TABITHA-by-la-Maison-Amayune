/* =========================================================
   TABITHA by la Maison Amayune — js/data.js
   Source UNIQUE des données : catégories (site vitrine).
   Chargé AVANT tous les autres scripts (home.js). Expose tout
   sur l'objet global "TABITHA_DATA".
   Vanilla JavaScript — Aucune dépendance externe.
   ========================================================= */

(function (global) {
  'use strict';

  /* ---------------------------------------------------------
     CONFIGURATION GÉNÉRALE
  --------------------------------------------------------- */
  const WHATSAPP_NUMBER = '2290144452648'; // sans le "+"

  /* ---------------------------------------------------------
     CATÉGORIES (éléments purement visuels — aucun lien,
     aucune page dédiée, aucune navigation)
     - key   : identifiant technique
     - label : nom affiché
     - desc  : courte description de l'univers
     - icon  : icône SVG de secours (si l'image ne charge pas)
     - image : visuel de catégorie (dossier /image)
  --------------------------------------------------------- */
  const CATEGORIES = [
    { key: 'nuisettes',        label: 'Nuisettes',              desc: 'Douceur et raffinement pour vos soirées.',            icon: 'dress',     image: 'nuisettes.jpeg' },
    { key: 'vetements-hommes', label: 'Vêtements Hommes',        desc: 'Des coupes modernes pour un style affirmé.',          icon: 'shirt',     image: 'vetements-hommes.jpeg' },
    { key: 'vetements-femmes', label: 'Vêtements Femmes',        desc: 'Élégance et confort au quotidien.',                   icon: 'dress',     image: 'vetements-femmes.png' },
    { key: 'jalabiyas',        label: 'Jalabiyas',               desc: 'Tissus légers et broderies soignées.',                icon: 'robe',      image: 'jalabiyas.jpeg' },
    { key: 'enfants',          label: 'Vêtements Enfants',       desc: 'Confort et fantaisie pour les petits.',               icon: 'child',     image: 'enfants.png' },
    { key: 'vlisco',           label: 'Tissus Vlisco',           desc: 'Motifs authentiques, qualité premium.',               icon: 'fabric',    image: 'vlisco.jpeg' },
    { key: 'maillots',         label: 'Maillots Authentiques',   desc: 'Qualité match, pour les passionnés.',                 icon: 'jersey',    image: 'maillots.jpeg' },
    { key: 'chaussures',       label: 'Chaussures',              desc: 'Confort et style à chaque pas.',                      icon: 'shoe',      image: 'chaussures.png' },
    { key: 'sacs',             label: 'Sacs à Main',             desc: 'Des pièces élégantes pour toutes les occasions.',     icon: 'bag',       image: 'sacs.jpeg' },
    { key: 'montres',          label: 'Montres',                 desc: 'Un style intemporel au poignet.',                     icon: 'watch',     image: 'montres.png' },
    { key: 'bracelets',        label: 'Bracelets',               desc: 'Finitions artisanales et délicates.',                 icon: 'bracelet',  image: 'bracelets.jpeg' },
    { key: 'colliers',         label: 'Colliers Personnalisés',  desc: 'Des créations uniques, sur mesure.',                  icon: 'necklace',  image: 'colliers.jpeg' },
    { key: 'accessoires',      label: 'Accessoires de Mode',     desc: 'Les détails qui font toute la différence.',           icon: 'accessory', image: 'accessoires.png' },
    { key: 'beaute',           label: 'Produits de Beauté',      desc: 'Pour une peau et des cheveux éclatants.',             icon: 'beauty',    image: 'beaute.png' },
    { key: 'divers',           label: 'Articles Divers',         desc: 'Une sélection utile et soignée.',                     icon: 'box',       image: 'divers.jpeg' },
  ];

  /* ---------------------------------------------------------
     ICÔNES SVG DE SECOURS (traits fins, style ligne élégant)
     Utilisées uniquement si une image de catégorie est absente.
  --------------------------------------------------------- */
  const ICONS = {
    dress: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2h6l1 3-2 2 3 13H7l3-13-2-2z"/></svg>`,
    shirt: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 3 7l3 3 2-1v11h8V9l2 1 3-3-5-4-2 2h-4z"/></svg>`,
    robe: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M8 5c-2 1-3 4-2 8l-2 9h16l-2-9c1-4 0-7-2-8-1 1.5-3 1.5-4 1.5S9 6 8 5Z"/></svg>`,
    child: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.2"/><path d="M8 10h8l1 4-2 1v6H9v-6l-2-1z"/></svg>`,
    fabric: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/><path d="M6 3v3M12 3v3M18 3v3M6 18v3M12 18v3M18 18v3"/></svg>`,
    jersey: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 3 7l3 3 2-1v11h8V9l2 1 3-3-5-4-2 2h-4z"/></svg>`,
    shoe: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c0-3 2-4 4-6l2-3 3 2 2-1 3 3c2 1 4 1.5 4 4v1H3z"/></svg>`,
    bag: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg>`,
    watch: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6"/><path d="M12 9v3l2 1M9 2h6l-1 4H10zM9 22h6l-1-4H10z"/></svg>`,
    bracelet: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="8" ry="5"/><path d="M8 8l1 8M16 8l-1 8M12 7v10"/></svg>`,
    necklace: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4c0 6 4 10 8 10s8-4 8-10"/><circle cx="12" cy="16" r="2.4"/></svg>`,
    accessory: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"/></svg>`,
    beauty: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2h6v3H9zM10 5h4v3.5c2 1 3 3 3 5.5v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6c0-2.5 1-4.5 3-5.5z"/></svg>`,
    box: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/></svg>`,
  };

  function categoryImagePath(cat){
    return './image/' + cat.image;
  }

  /* ---------------------------------------------------------
     EXPORT GLOBAL
  --------------------------------------------------------- */
  global.TABITHA_DATA = {
    WHATSAPP_NUMBER,
    CATEGORIES,
    ICONS,
    categoryImagePath,
  };

})(window);

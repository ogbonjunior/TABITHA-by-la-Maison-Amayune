/* =========================================================
   TABITHA by la Maison Amayune — js/home.js
   Rendu de la section "Nos Catégories" (page d'accueil et
   page categories.html). Éléments PUREMENT VISUELS : image,
   nom, courte description. Aucun lien, aucun clic, aucune
   navigation, aucune fiche produit.
   Vanilla JavaScript — Aucune dépendance externe.
   ========================================================= */

(() => {
  'use strict';

  const D = window.TABITHA_DATA;
  const categoryGrid = document.getElementById('categoryGrid');
  if (!D || !categoryGrid) return;

  function renderCategoryGrid(){
    categoryGrid.innerHTML = D.CATEGORIES.map(cat => `
      <div class="category-card reveal">
        <div class="category-img">
          <img src="${D.categoryImagePath(cat)}" alt="${cat.label}" loading="lazy" data-icon="${cat.icon}">
        </div>
        <div class="category-body">
          <h3>${cat.label}</h3>
          <p>${cat.desc}</p>
        </div>
      </div>
    `).join('');

    /* Filet de sécurité : si une image ne charge pas, on bascule
       sur l'icône SVG de secours au lieu d'une image cassée. */
    categoryGrid.querySelectorAll('.category-img img').forEach(img => {
      img.addEventListener('error', () => {
        const wrap = img.parentElement;
        wrap.classList.add('category-img-fallback');
        wrap.innerHTML = D.ICONS[img.dataset.icon] || D.ICONS.box;
      }, { once:true });
    });

    if (window.TABITHA_observeReveal) window.TABITHA_observeReveal();
  }

  document.addEventListener('DOMContentLoaded', renderCategoryGrid);

})();

/* =========================================================
   TABITHA by la Maison Amayune — js/common.js
   Comportements COMMUNS à toutes les pages du site :
   header au scroll, menu burger mobile, animations reveal,
   année du footer. Chargé sur CHAQUE page après data.js.
   Vanilla JavaScript — Aucune dépendance externe.
   ========================================================= */

(() => {
  'use strict';

  /* ---------------------------------------------------------
     HEADER — effet au scroll
  --------------------------------------------------------- */
  const header = document.getElementById('siteHeader');
  if (header){
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive:true });
  }

  /* ---------------------------------------------------------
     MENU BURGER (mobile)
  --------------------------------------------------------- */
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');
  if (burger && navMenu){
    burger.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navMenu.classList.remove('open'))
    );
  }

  /* ---------------------------------------------------------
     ANIMATIONS AU SCROLL (fade + translate)
  --------------------------------------------------------- */
  function observeReveal(){
    const items = document.querySelectorAll('.reveal:not(.in-view)');
    if (!items.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.14 });
    items.forEach(el => io.observe(el));
  }
  window.TABITHA_observeReveal = observeReveal;

  /* ---------------------------------------------------------
     BOUTON "Découvrir les produits" (page d'accueil uniquement)
  --------------------------------------------------------- */
  const btnDiscover = document.getElementById('btnDiscover');
  if (btnDiscover){
    btnDiscover.addEventListener('click', () => {
      document.getElementById('produits')?.scrollIntoView({ behavior:'smooth' });
    });
  }

  /* ---------------------------------------------------------
     INITIALISATION
  --------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    observeReveal();
    const yearEl = document.getElementById('yearNow');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

})();

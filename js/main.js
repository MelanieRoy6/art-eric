/* ============================================================
   main.js — Initialisation Globale & Comportements
   Eric ROY | Portfolio Artistique

   Note : Ce fichier doit être chargé après components.js.
   Le site doit être servi via HTTP (ex : Live Server, python -m
   http.server) pour que les chemins absolus fonctionnent.
   ============================================================ */

'use strict';

/* ============================================================
   POINT D'ENTRÉE
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();          // Injecte le header (défini dans components.js)
  initFooter();          // Injecte le footer (défini dans components.js)
  initScrollAnimations();
  initPageFade();
  initContactForm();     // Gestion du formulaire (no-op sur les autres pages)
  initGalleryCards();    // Cartes interactives galerie (no-op si absent)
});


/* ============================================================
   ANIMATIONS AU SCROLL — IntersectionObserver
   Déclenche la classe .is-visible sur .animate-in quand
   l'élément entre dans le viewport.
   ============================================================ */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    // Fallback navigateurs anciens : tout afficher directement
    document.querySelectorAll('.animate-in').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -48px 0px',
    }
  );

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}


/* ============================================================
   TRANSITION PAGE — Fade-in à l'entrée
   ============================================================ */
function initPageFade() {
  // Petit délai pour que le navigateur ait le temps de peindre
  requestAnimationFrame(() => {
    document.body.classList.add('page-loaded');
  });
}


/* ============================================================
   FORMULAIRE CONTACT — Validation & Soumission simulée
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    // Simuler l'envoi (à remplacer par fetch() vers un service email)
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = 'Envoi en cours…';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      if (successMsg) successMsg.classList.add('is-visible');
    }, 1200);
  });
}

/**
 * Validation simple des champs requis.
 * @param {HTMLFormElement} form
 * @returns {boolean}
 */
function validateForm(form) {
  let isValid = true;

  form.querySelectorAll('[required]').forEach(field => {
    const group = field.closest('.form-group');
    const error = group ? group.querySelector('.form-error') : null;

    if (!field.value.trim()) {
      isValid = false;
      field.style.borderColor = '#E05520';
      if (error) error.style.display = 'block';
    } else if (field.type === 'email' && !isValidEmail(field.value)) {
      isValid = false;
      field.style.borderColor = '#E05520';
      if (error) error.style.display = 'block';
    } else {
      field.style.borderColor = '';
      if (error) error.style.display = 'none';
    }
  });

  if (!isValid) {
    const firstError = form.querySelector('[required][style*="border"]');
    if (firstError) firstError.focus();
  }

  return isValid;
}

/** Vérifie le format d'une adresse email. */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ============================================================
   GALERIE — Comportements des cartes (aria live etc.)
   ============================================================ */
function initGalleryCards() {
  const cards = document.querySelectorAll('.card');
  if (!cards.length) return;

  // Rendre chaque carte accessible au clavier si elle est un lien
  cards.forEach(card => {
    const link = card.querySelector('a');
    if (!link) return;

    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });
}

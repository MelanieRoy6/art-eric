/* ============================================================
   components.js — Templates HTML & Injection des Composants
   Eric ROY | Portfolio Artistique
   ============================================================ */

'use strict';

/* ============================================================
   TEMPLATE — HEADER + MENU MOBILE
   ============================================================ */
const HEADER_TEMPLATE = `
<header class="site-header" id="site-header" role="banner">
  <div class="container header-inner">

    <a href="/index.html" class="site-logo" aria-label="Eric ROY — Retour à l'accueil">
      ERIC ROY<span class="logo-dot" aria-hidden="true"></span>
    </a>

    <nav class="site-nav" aria-label="Navigation principale">
      <ul role="list">
        <li><a href="/index.html"     class="nav-link" data-page="index">Accueil</a></li>
        <li><a href="/galerie.html"   class="nav-link" data-page="galerie">Galerie</a></li>
        <li><a href="/a-propos.html"  class="nav-link" data-page="a-propos">À Propos</a></li>
        <li><a href="/contact.html"   class="nav-link" data-page="contact">Contact</a></li>
      </ul>
    </nav>

    <button
      class="burger-btn"
      id="burger-btn"
      aria-label="Ouvrir le menu de navigation"
      aria-expanded="false"
      aria-controls="mobile-nav"
    >
      <span class="burger-line" aria-hidden="true"></span>
      <span class="burger-line" aria-hidden="true"></span>
      <span class="burger-line" aria-hidden="true"></span>
    </button>

  </div>
</header>

<nav
  class="mobile-nav"
  id="mobile-nav"
  aria-label="Navigation mobile"
  aria-hidden="true"
>
  <ul role="list">
    <li><a href="/index.html"     class="nav-link" data-page="index">Accueil</a></li>
    <li><a href="/galerie.html"   class="nav-link" data-page="galerie">Galerie</a></li>
    <li><a href="/a-propos.html"  class="nav-link" data-page="a-propos">À Propos</a></li>
    <li><a href="/contact.html"   class="nav-link" data-page="contact">Contact</a></li>
  </ul>
</nav>
`;


/* ============================================================
   TEMPLATE — FOOTER
   ============================================================ */
const FOOTER_TEMPLATE = `
<footer class="site-footer" role="contentinfo">
  <div class="container">

    <div class="footer-inner">

      <!-- Colonne marque -->
      <div class="footer-brand">
        <a href="/index.html" class="site-logo" aria-label="Eric ROY — Retour à l'accueil">
          ERIC ROY<span class="logo-dot" aria-hidden="true"></span>
        </a>
        <p class="footer-tagline">
          Artiste peintre franco-américain.<br>
          Un art abstrait unique, né entre<br>deux continents.
        </p>
        <div class="footer-social" aria-label="Réseaux sociaux">
          <a href="https://instagram.com/roy.abstractart" class="social-link" aria-label="Instagram @roy.abstractart" target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://facebook.com/roy.abstractart" class="social-link" aria-label="Facebook @roy.abstractart" target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/eric-roy-art" class="social-link" aria-label="LinkedIn Eric ROY" target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Colonne navigation -->
      <nav class="footer-nav" aria-label="Navigation secondaire">
        <h3 class="footer-col-title">Navigation</h3>
        <ul role="list">
          <li><a href="/index.html">Accueil</a></li>
          <li><a href="/galerie.html">Galerie</a></li>
          <li><a href="/a-propos.html">À Propos</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </nav>

      <!-- Colonne informations -->
      <div class="footer-nav">
        <h3 class="footer-col-title">Commandes &amp; Projets</h3>
        <ul role="list">
          <li><a href="/contact.html">Acquérir une œuvre</a></li>
          <li><a href="/contact.html">Tableau sur mesure</a></li>
          <li><a href="/contact.html">Projets corporatifs</a></li>
          <li><a href="/contact.html">Architectes &amp; Designers</a></li>
          <li><a href="/mentions-legales.html">Mentions légales</a></li>
        </ul>
      </div>

    </div>

    <!-- Bande du bas -->
    <div class="footer-bottom">
      <p class="footer-copy" style="color:var(--color-accent);">&copy; 2026 Eric ROY &mdash; France &middot; États-Unis &middot; Canada &mdash; Tous droits réservés</p>
      <nav class="footer-legal" aria-label="Liens légaux">
        <a href="/mentions-legales.html">Mentions légales</a>
        <a href="https://www.linkedin.com/in/m%C3%A9lanie-roy/" target="_blank" rel="noopener noreferrer" style="color:var(--color-accent);">Site développé par Mélanie ROY</a>
      </nav>
    </div>

  </div>
</footer>
`;


/* ============================================================
   INJECTION DES COMPOSANTS
   ============================================================ */

/**
 * Insère un template HTML à une position donnée dans un sélecteur cible.
 * @param {string} selector - Sélecteur CSS de l'élément cible
 * @param {string} template - Chaîne HTML à insérer
 * @param {InsertPosition} position - Position d'insertion
 */
function injectComponent(selector, template, position = 'afterbegin') {
  const target = document.querySelector(selector);
  if (!target) {
    console.warn(`[components.js] Sélecteur introuvable : "${selector}"`);
    return;
  }
  target.insertAdjacentHTML(position, template);
}


/* ============================================================
   INITIALISATION DU HEADER
   ============================================================ */
function initHeader() {
  injectComponent('body', HEADER_TEMPLATE, 'afterbegin');

  const header    = document.getElementById('site-header');
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (!header) return;

  /* --- Effet transparent → opaque au scroll --- */
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Appel initial

  /* --- Toggle menu burger --- */
  if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      burgerBtn.classList.toggle('is-active', isOpen);
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
      // Bloque le scroll du body quand le menu est ouvert
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Fermer le menu au clic sur un lien */
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    /* Fermer au clic sur Escape */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    function closeMobileMenu() {
      mobileNav.classList.remove('is-open');
      burgerBtn.classList.remove('is-active');
      burgerBtn.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  /* --- Marquer le lien actif --- */
  setActiveNavLink();
}


/* ============================================================
   LIEN ACTIF — Détection via URL
   ============================================================ */
function setActiveNavLink() {
  const path        = window.location.pathname;
  const filename    = path.split('/').pop();
  const currentPage = filename.replace('.html', '') || 'index';

  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    const isActive = link.dataset.page === currentPage;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}


/* ============================================================
   INITIALISATION DU FOOTER
   ============================================================ */
function initFooter() {
  injectComponent('body', FOOTER_TEMPLATE, 'beforeend');
}

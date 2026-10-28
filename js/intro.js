/* ============================================================
   intro.js — Animation d'introduction (page d'accueil)
   Eric ROY | Portfolio Artistique

   - Ne joue que sur la page d'accueil, une fois par session
     (sessionStorage). Pour la revoir : ajouter ?intro à l'URL.
   - Désactivée si l'utilisateur préfère un mouvement réduit.
   - Passable : bouton « Passer » ou touche Échap.
   - Chorégraphie : voir css/intro.css
   ============================================================ */

'use strict';

(function () {
  const STORAGE_KEY = 'ericroy:intro-seen';
  const IMAGE_SRC   = '/assets/intro-tableau.jpg';
  const MAX_WAIT_MS = 2500;   // temps max pour charger l'image
  const SAFETY_MS   = 7500;   // filet de sécurité si animationend ne part pas
  const LEAVE_MS    = 950;    // durée de la sortie (cf. transition CSS)

  const root = document.documentElement;

  /* ---------- Faut-il jouer l'intro ? ---------- */
  const isHome  = /^\/(index\.html)?$/.test(window.location.pathname);
  const forced  = /[?&]intro(=1)?(&|$)/.test(window.location.search);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let seen = false;
  try { seen = sessionStorage.getItem(STORAGE_KEY) === '1'; } catch (e) { /* stockage indisponible */ }

  if (!isHome || reduced || (seen && !forced)) return;

  /* ---------- Construction de l'écran ---------- */
  const overlay = document.createElement('div');
  overlay.className = 'intro';
  overlay.setAttribute('role', 'region');
  overlay.setAttribute('aria-label', 'Animation d’introduction');
  overlay.innerHTML = `
    <div class="intro-stage" aria-hidden="true">
      <div class="intro-shadow"></div>
      <div class="intro-camera">
        <div class="intro-cube">
          <div class="intro-face intro-face--front"><img src="${IMAGE_SRC}" alt="" decoding="async"></div>
          <div class="intro-face intro-face--back">
            <span class="intro-back-label">Eric ROY<br>Pièce unique</span>
          </div>
          <div class="intro-face intro-face--left"></div>
          <div class="intro-face intro-face--right"></div>
          <div class="intro-face intro-face--top"></div>
          <div class="intro-face intro-face--bottom"></div>
        </div>
      </div>
    </div>
    <span class="intro-brand" aria-hidden="true">Eric ROY</span>
    <button type="button" class="intro-skip">Passer l’animation</button>
    <span class="intro-progress" aria-hidden="true"></span>
  `;

  const camera = overlay.querySelector('.intro-camera');
  const skip   = overlay.querySelector('.intro-skip');
  const main   = document.getElementById('main-content');

  root.classList.add('intro-playing', 'intro-hold');
  document.body.insertBefore(overlay, document.body.firstChild);
  if (main) main.inert = true;
  skip.focus({ preventScroll: true });

  let finished = false;

  /* ---------- Sortie ---------- */
  function leave() {
    if (finished) return;
    finished = true;

    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) { /* ignore */ }
    document.removeEventListener('keydown', onKey);

    root.classList.remove('intro-hold');          // la page d'accueil s'anime
    overlay.classList.add('is-leaving');          // l'écran se lève

    window.setTimeout(cleanup, LEAVE_MS);
  }

  function cleanup() {
    const hadFocus = overlay.contains(document.activeElement);
    overlay.remove();
    root.classList.remove('intro-playing');
    if (main) {
      main.inert = false;
      if (hadFocus) main.focus({ preventScroll: true });
    }
  }

  function onKey(e) {
    if (e.key === 'Escape') leave();
  }

  skip.addEventListener('click', leave);
  document.addEventListener('keydown', onKey);

  /* ---------- Démarrage, une fois l'image prête ---------- */
  const img = overlay.querySelector('img');

  const ready = new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error('timeout')), MAX_WAIT_MS);
    const done  = (ok) => { window.clearTimeout(timer); ok ? resolve() : reject(new Error('image')); };
    if (img.complete && img.naturalWidth) return done(true);
    img.addEventListener('load',  () => done(true),  { once: true });
    img.addEventListener('error', () => done(false), { once: true });
  });

  ready.then(() => {
    if (finished) return;
    overlay.classList.add('is-playing');

    // La caméra est l'élément dont l'animation se termine en dernier
    camera.addEventListener('animationend', (e) => {
      if (e.target === camera) leave();
    });
    window.setTimeout(leave, SAFETY_MS);
  }).catch(leave);
})();

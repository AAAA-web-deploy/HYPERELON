'use strict';

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const sceneDialog = document.getElementById('sceneDialog');
const dialogImage = document.getElementById('dialogImage');
const dialogTitle = document.getElementById('dialogTitle');
const sceneCards = Array.from(document.querySelectorAll('[data-scene]'));

const scenes = [
  { id: 'moon', name: 'TO THE MOON', file: 'to-the-moon.webp', alt: 'HyperElon rides with a futuristic Shiba Inu beneath a planet' },
  { id: 'future', name: 'A BRIGHTER FUTURE', file: 'brighter-future.webp', alt: 'A luminous Ethereum-inspired futuristic megacity' },
  { id: 'mission', name: 'THE MISSION', file: 'mission.webp', alt: 'HyperElon approaches a glowing diamond above a futuristic city' },
  { id: 'liftoff', name: 'LIFTOFF', file: 'liftoff.webp', alt: 'Rocket rising into violet clouds' },
  { id: 'different', name: 'BUILT DIFFERENT', file: 'built-different.webp', alt: 'Close-up of HyperElon under a violet planet' },
  { id: 'crew', name: 'THE HYPER CREW', file: 'community.webp', alt: 'The HyperElon community celebrating in a futuristic arena' },
  { id: 'bigger', name: 'BIGGER THAN US', file: 'bigger-than-us.webp', alt: 'HyperElon and companion look toward Earth from the Moon' },
  { id: 'next', name: 'NEXT CHAPTER', file: 'next-chapter.webp', alt: 'Electric vehicles racing through a sci-fi city' }
];
let activeSceneIndex = 0;
let lastTrigger = null;

function setMenu(open) {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNav.hidden = !open;
}
menuToggle?.addEventListener('click', () => setMenu(mobileNav.hidden));
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', event => {
  if (!mobileNav?.hidden && !mobileNav.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
});
window.addEventListener('resize', () => { if (window.innerWidth >= 1000) setMenu(false); });

function updateScene(index) {
  activeSceneIndex = (index + scenes.length) % scenes.length;
  const scene = scenes[activeSceneIndex];
  dialogImage.src = `assets/layout-crops/${scene.file}`;
  dialogImage.alt = scene.alt;
  dialogTitle.textContent = scene.name;
}
function openScene(id, trigger) {
  const index = scenes.findIndex(scene => scene.id === id);
  if (index === -1) return;
  lastTrigger = trigger;
  updateScene(index);
  if (!sceneDialog.open) sceneDialog.showModal();
}
sceneCards.forEach(card => card.addEventListener('click', () => openScene(card.dataset.scene, card)));
document.getElementById('closeDialog')?.addEventListener('click', () => sceneDialog.close());
document.getElementById('previousScene')?.addEventListener('click', () => updateScene(activeSceneIndex - 1));
document.getElementById('nextScene')?.addEventListener('click', () => updateScene(activeSceneIndex + 1));
sceneDialog?.addEventListener('click', event => { if (event.target === sceneDialog) sceneDialog.close(); });
sceneDialog?.addEventListener('close', () => lastTrigger?.focus());
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) setMenu(false);
  if (!sceneDialog.open) return;
  if (event.key === 'ArrowLeft') updateScene(activeSceneIndex - 1);
  if (event.key === 'ArrowRight') updateScene(activeSceneIndex + 1);
});

const year = document.getElementById('currentYear');
if (year) year.textContent = String(new Date().getFullYear());

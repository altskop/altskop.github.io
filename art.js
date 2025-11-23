// /* ---------------- Nav ---------------- */
// const pages = [{ id: 'emotes', label: 'Emotes', href: 'index.html' }, { id: 'art', label: 'Art', href: 'art.html' }];
// const current = 'art';
// const sideNav = document.getElementById('side-nav'); pages.forEach(p => { const a = document.createElement('a'); a.href = p.href; a.textContent = p.label; a.className = 'nav-btn' + (p.id === 'art' ? ' active' : ''); sideNav.appendChild(a); });

/* ------------- Art data -------------- */
const artworks = [
    { 'src': 'art/shoomimi/kawaii.mp4', 'note': 'Shoomimi Kawaii-Kawaii (2025)', 'video': true },
    { 'src': 'art/shoomimi/mimi_1.mp4', 'note': 'Mi-mi, mi-mi, oo-ee-oo (2025)', 'video': true },
    { 'src': 'art/shoomimi/swipe.mp4', 'note': 'Swipe Shoominions (2025)', 'video': true },
    { 'src': 'art/shoomimi/advicecollab.mp4', 'note': 'Advice Collab (2025)', 'video': true },
    { 'src': 'art/shoomimi/hollowknight.mp4', 'note': 'Shoomimi Hollow Knight (2025)', 'video': true },

    { 'src': 'art/luniDance.mp4', 'note': 'LuniTooony dance', 'video': true },
    { 'src': 'art/vac_bday2025.png', 'note': 'Vacu0usly (2025)' },
    { 'src': 'art/MAIN_COMP_6_1.gif', 'note': 'Vacu0usly kidnaps you (2024)' },
    { 'src': 'art/vacBday2024.mp4', 'note': 'Vacu0usly (2024)', 'video': true },
    { 'src': 'art/vacmovie1.mp4', 'note': 'Vacu0usly date (2024)', 'video': true },
    { 'src': 'art/main.mp4', 'note': 'Vacu0usly birthday (2023)', 'video': true },
    { 'src': 'art/PRODUCTION_2.mp4', 'note': 'Production materials', 'video': true },
    { 'src': 'art/spritesheet.gif', 'note': 'Spelunky Spritesheet' },
    { 'src': 'art/sholzdance.mp4', 'note': 'Sholzi Pokemon-dance (2024)', 'video': true },
    { 'src': 'art/rem2023_final2.png', 'note': 'Rem (2023)' },
    { 'src': 'art/luniProduction.mp4', 'note': 'LuniTooony dance timelapse', 'video': true },
    { 'src': 'art/vacbdayTimelapse_1.mp4', 'note': 'Timelapse process', 'video': true },
    { 'src': 'art/vac_bday2025_progress.mp4', 'note': 'Timelapse process', 'video': true },
    { 'src': 'art/watson&gura_final.jpg', 'note': 'Watson & Gura go skydiving (2021)' },
    { 'src': 'art/watson_bangalore_Xsm.jpg', 'note': 'Watson cosplaying Bangalore (2021)' },
    { 'src': 'art/megu.png', 'note': 'Megumin (2021)' },
];

/* -------- Build page -------- */
const app = document.getElementById('app');
const section = document.createElement('section'); section.className = 'section';
section.innerHTML = '<h2 class="section-title">Art Gallery</h2>';
const gallery = document.createElement('div'); gallery.className = 'gallery';

/* viewer overlay */
const viewer = document.getElementById('viewer');
const openViewer = elem => { viewer.innerHTML = ''; viewer.appendChild(elem); viewer.classList.add('open'); };
viewer.addEventListener('click', e => { if (e.target === viewer) { viewer.classList.remove('open'); viewer.innerHTML = ''; } });

/* IntersectionObserver for lazy loading */
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const card = entry.target; io.unobserve(card);
            const media = card.querySelector('.art-media');
            if (media.dataset.src) {
                media.src = media.dataset.src;
                if (media.tagName === 'VIDEO') { media.load(); }
            }
        }
    });
}, { root: null, threshold: 0.2 });

artworks.forEach(a => {
    const card = document.createElement('div'); card.className = 'art-card';
    let media; const ext = a.src.split('.').pop().toLowerCase();
    if (ext === 'mp4' || a.video) {
        media = document.createElement('video');
        media.dataset.src = a.src; // lazy
        media.preload = 'none'; media.autoplay = true; media.loop = true; media.muted = true; media.playsInline = true;
    } else {
        media = document.createElement('img');
        media.dataset.src = a.src; // lazy
        media.alt = 'Artwork'; media.loading = 'lazy';
    }
    media.className = 'art-media'; card.appendChild(media);
    if (a.note) { const n = document.createElement('span'); n.className = 'art-note'; n.textContent = a.note; card.appendChild(n); }
    card.addEventListener('click', () => {
        const clone = media.cloneNode(true);
        if (clone.dataset.src && !clone.src) { clone.src = clone.dataset.src; }
        if (clone.tagName === 'VIDEO') { clone.controls = true; clone.currentTime = 0; }
        openViewer(clone);
    });
    gallery.appendChild(card);
    io.observe(card); // start observing for lazy load
});
section.appendChild(gallery); app.appendChild(section);
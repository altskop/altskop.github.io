/* ------------------ NAVIGATION ------------------ */
const pages = [
    { id: 'emotes', label: 'Emotes', href: 'index.html' },
    { id: 'art', label: 'Art', href: 'art.html' }
];
const current = window.location.pathname.toLowerCase().includes('art') ? 'art' : 'emotes';
const sideNav = document.getElementById('side-nav');
pages.forEach(p => {
    const a = document.createElement('a');
    a.className = 'nav-btn' + (p.id === current ? ' active' : '');
    a.href = p.href;
    a.textContent = p.label;
    sideNav.appendChild(a);
});
/*
    =========================
    Editable content section
    =========================
    Each person entry:
    name   : Display name
    twitch : Twitch channel username (omit https://twitch.tv/)
    emotes : [ { src, note? } ]
*/
const people = [
    { 'name': 'Vacu0usly', 'twitch': 'vacu0usly', 'emotes': [{ 'src': 'assets/vac/angry.gif' }, { 'src': 'assets/vac/bleh.png' }, { 'src': 'assets/vac/giggle.gif' }, { 'src': 'assets/vac/heart5.png' }, { 'src': 'assets/vac/nod.gif' }, { 'src': 'assets/vac/pout.png' }, { 'src': 'assets/vac/shock_lines.png' }, { 'src': 'assets/vac/vacAyayaSmile_1_128.gif' }, { 'src': 'assets/vac/vacKiss_twitch.gif' }, { 'src': 'assets/vac/vacPat_twitch.gif' }, { 'src': 'assets/vac/vacTalk_60frames_twitch.gif' }, { 'src': 'assets/vac/vacu0uBites_256px.gif' }, { 'src': 'assets/vac/vacu0uPanic_v1.gif' }, { 'src': 'assets/vac/vacu0uSussy_256px.gif' }, { 'src': 'assets/vac/vacu0uTalk_v1.gif', 'note': "Original by UYU, I only animated it" }, { 'src': 'assets/vac/vacWave_60frames_twitch.gif' }, { 'src': 'assets/vac/wave120.gif', 'note': "Original by UYU, I only animated it" }, { 'src': 'assets/vac/wokege3.png' }] },
    { 'name': 'DreamyDiglett', 'twitch': 'dreamydiglett', 'emotes': [{ 'src': 'assets/dreamydiglett/dreamyFine_256px.gif' }, { 'src': 'assets/dreamydiglett/dreamyFlustered_128px.gif' }, { 'src': 'assets/dreamydiglett/dreamyGiggle_256px.gif' }, { 'src': 'assets/dreamydiglett/dreamyNodders_112px.gif' }, { 'src': 'assets/dreamydiglett/dreamyNotes_112px.gif' }, { 'src': 'assets/dreamydiglett/dreamyShake_112px.gif' }, { 'src': 'assets/dreamydiglett/dreamyTap_112px.gif' }, { 'src': 'assets/dreamydiglett/dreamyWave_112px.gif' }] },
    { 'name': 'Sholzi', 'twitch': 'sholzi', 'emotes': [{ 'src': 'assets/sholzi/drink.png' }, { 'src': 'assets/sholzi/hamhamham_slow.gif' }, { 'src': 'assets/sholzi/parasocial.png' }, { 'src': 'assets/sholzi/sholziSpinSpin_no_outline.gif' }, { 'src': 'assets/sholzi/sholziTalk_FullFrames.gif' }, { 'src': 'assets/sholzi/teehee.png' }, { 'src': 'assets/sholzi/yaayzi_256px.gif' }] },
];

/* Helper to slugify names for IDs */
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const app = document.getElementById('app');

people.forEach((p, idx) => {
    // ---- Section wrapper
    const section = document.createElement('section');
    section.className = 'section';
    section.id = slug(p.name);
    const h2 = document.createElement('h2'); h2.className = 'section-title';
    // LINK WRAPS NAME + ICON
    const link = document.createElement('a');
    link.href = `https://twitch.tv/${p.twitch}`;
    link.target = '_blank';
    link.className = 'twitch-link';
    link.style.display = 'inline-flex';
    link.style.alignItems = 'center';
    link.style.gap = '.4rem';
    const txt = document.createTextNode(p.name);
    const icon = document.createElement('img'); icon.src = 'assets/twitch.webp'; icon.alt = 'Twitch'; icon.className = 'twitch-icon';
    link.appendChild(txt);
    link.appendChild(icon);
    h2.appendChild(link);
    section.appendChild(h2);

    // ---- Gallery grid
    const gallery = document.createElement('div');
    gallery.className = 'emotegallery';
    p.emotes.forEach(e => {
        const wrapper = document.createElement('div');
        wrapper.className = 'emote';
        const img = document.createElement('img');
        img.src = e.src;
        img.alt = `${p.name} – Emote`;
        wrapper.appendChild(img);
        if (e.note) {
            const span = document.createElement('span');
            span.className = 'emote-note';
            span.textContent = `(${e.note})`;
            wrapper.appendChild(span);
        }
        gallery.appendChild(wrapper);
    });
    section.appendChild(gallery);

    app.appendChild(section);

    // ---- Divider (except after last)
    if (idx !== people.length - 1) {
        const div = document.createElement('div');
        div.className = 'divider';
        app.appendChild(div);
    }
});

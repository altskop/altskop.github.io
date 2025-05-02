/* ------------------ NAVIGATION ------------------ */
const pages = [
    { id: 'emotes', label: 'Emotes', href: 'index.html' },
    { id: 'art', label: 'Art', href: 'art.html' },
    { id: 'twitch', label: 'Twitch', icon: "assets/twitch.webp", href: 'https://twitch.tv/altskop', class: 'twitch-nav-link' },
];
const current = window.location.pathname.toLowerCase().includes('art') ? 'art' : 'emotes';
const sideNav = document.getElementById('side-nav');
pages.forEach(p => {
    const a = document.createElement('a');
    a.className = 'nav-btn' + (p.id === current ? ' active' : '');
    a.href = p.href;
    a.textContent = p.label;
    if (p.icon) {
        const icon = document.createElement('img');
        icon.src = p.icon;
        icon.alt = p.label;
        icon.className = 'nav-icon';
        a.append(icon);
    }
    if (p.class) {
        a.classList.add(p.class);
    }
    if (p.id === 'twitch') {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
    }
    sideNav.appendChild(a);
});
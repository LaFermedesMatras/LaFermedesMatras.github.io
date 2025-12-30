const hamburger = document.getElementById('hamburger-icon');
const menu = document.getElementById('menu-items');
const submenuLinks = document.querySelectorAll('.submenu > a');

// --- Menu hamburger ---
hamburger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show');

    if (!isOpen) {
        submenuLinks.forEach(link => link.parentElement.classList.remove('open'));
    }
});

// --- Sous-menu mobile : 1er clic ouvre, 2e clic navigue ---
submenuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            const parent = this.parentElement;

            if (!parent.classList.contains('open')) {
                e.preventDefault(); // 1er clic → ouvrir
                parent.classList.add('open');
            }
            // sinon → 2e clic = navigation normale
        }
    });
});

// --- Fermer si clic en dehors ---
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('show');
        submenuLinks.forEach(link => {
            link.parentElement.classList.remove('open');
        });
    }
});

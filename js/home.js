(function () {
    var hamburger = document.querySelector('.hamburger');
    var drawer = document.getElementById('mobile-drawer');
    var overlay = document.querySelector('.overlay');
    var closeBtn = document.querySelector('.drawer-close');
    var navLinks = drawer.querySelectorAll('a'); // all links inside the drawer

    function openDrawer() {
        drawer.classList.add('open');
        overlay.classList.add('active');
        hamburger.classList.add('active');
        drawer.setAttribute('aria-hidden', 'false');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
        drawer.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function () {
        if (drawer.classList.contains('open')) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });

    overlay.addEventListener('click', closeDrawer);
    closeBtn.addEventListener('click', closeDrawer);

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            closeDrawer();
        }
    });

    // Close if resized to desktop while open
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && drawer.classList.contains('open')) {
            closeDrawer();
        }
    });

    // Close drawer when any nav link is clicked
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeDrawer);
    });
})();



(function () {
    var items = document.querySelectorAll('.faq-item');
    function closeAll(except) {
        items.forEach(function (it) {
            if (it !== except) {
                it.classList.remove('open');
                var btn = it.querySelector('.faq-q');
                var panel = it.querySelector('.faq-a');
                if (btn) btn.setAttribute('aria-expanded', 'false');
                if (panel) panel.style.maxHeight = '';
            }
        });
    }
    items.forEach(function (item) {
        var btn = item.querySelector('.faq-q');
        var panel = item.querySelector('.faq-a');
        btn.addEventListener('click', function () {
            var isOpen = item.classList.contains('open');
            closeAll(isOpen ? null : item);
            if (isOpen) {
                item.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
                panel.style.maxHeight = '';
            } else {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
        window.addEventListener('resize', function () {
            if (item.classList.contains('open')) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
})();
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const submenu = document.querySelector('.submenu');
  const navLinks = document.querySelectorAll('.nav-link');

  function openSubmenu() {
    submenu.classList.toggle('active');
  }

  function closeSubmenu() {
    submenu.classList.remove('active');
  }

  menuBtn.addEventListener('click', openSubmenu);

  navLinks.forEach(link =>
    link.addEventListener('click', ({ target }) => {
      const targetElement = document.getElementById(
        target.getAttribute('href').substring(1)
      );

      targetElement.scrollIntoView({ behavior: 'smooth' });

      closeSubmenu();
    })
  );

  document.addEventListener('click', ({ target }) => {
    const isClickInsideMenu =
      menuBtn.contains(target) || submenu.contains(target);

    if (!isClickInsideMenu) closeSubmenu();
  });
});

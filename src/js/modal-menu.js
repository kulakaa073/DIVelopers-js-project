document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('#openModal');
  const closeBtn = document.querySelector('.close-modal-menu');
  const modalMenu = document.querySelector('.modal-menu');
  const body = document.querySelector('body');
  const modalNavLinks = document.querySelectorAll('.modal-nav-link');
  const modalOrderBtn = document.querySelector('.modal-order-btn');

  function openMenu() {
    modalMenu.classList.add('active');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    modalMenu.classList.remove('active');
    body.style.overflow = 'auto';
  }

  burgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  modalNavLinks.forEach(link =>
    link.addEventListener('click', ({ target }) => {
      const targetElement = document.getElementById(
        target.getAttribute('href').substring(1)
      );

      targetElement.scrollIntoView({ behavior: 'smooth' });

      closeMenu();
    })
  );
  modalOrderBtn.addEventListener('click', event => {
    event.preventDefault();
    const targetElement = document.getElementById(
      modalOrderBtn.getAttribute('href').substring(1)
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  });
});

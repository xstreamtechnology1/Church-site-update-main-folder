// Scoped JavaScript for Hamburger Menu
const scopedHamburgerMenu = document.getElementById('hamburger-menu');
const scopedHamburgerNavLinks = document.querySelector('.hamburger-nav-links');

scopedHamburgerMenu.addEventListener('click', () => {
  scopedHamburgerNavLinks.classList.toggle('active');
});


const menuBtn = document.querySelector('.menu__line')
const mobileMenu = document.querySelector('.menu__item')

menuBtn.addEventListener('click', () => {
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden')
    mobileMenu.classList.add('visible')
  } else {
    mobileMenu.classList.remove('visible')
    mobileMenu.classList.add('hidden')
  }
})
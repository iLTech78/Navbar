const firstNav = document.querySelector(".first-nav");
const secondeNav = document.querySelector(".seconde-nav");
let lastScroll = 0;
let secondScroll = false;
let pxAtScroolDown = 0;
let HEIGHT_NAV = 56;
let secondScrollUp = false;
let pxAtScroolUp = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    console.log("je suis en haut de la page");
    firstNav.classList.remove("scroll-up");
    firstNav.classList.remove("scroll-down");
  }

  if (currentScroll > lastScroll) {
    console.log("scroll-down");
    firstNav.classList.add("scroll-down");
    secondScroll = true;
    secondScrollUp = false;
    pxAtScroolUp = 0;
  }
  if (currentScroll < lastScroll) {
    console.log("scroll-up");
    secondeNav.classList.remove("scroll-down");
    secondScroll = false;
    secondScrollUp = true;
    pxAtScroolDown = 0;
  }
  if (secondScroll) {
    if (!pxAtScroolDown) {
      pxAtScroolDown = window.pageYOffset;
    }

    if (pxAtScroolDown + 800 < window.pageYOffset) {
      secondeNav.classList.add("scroll-down");
    }
  }

  if (secondScrollUp) {
    if (!pxAtScroolUp) {
      pxAtScroolUp = window.pageYOffset;
    }

    if (pxAtScroolUp - 800 > window.pageYOffset) {
      firstNav.classList.remove("scroll-down");
    }
  }
  lastScroll = currentScroll;
});

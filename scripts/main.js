document.addEventListener('DOMContentLoaded', function () {

  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          el.classList.add('inview');
      }
  }

  new ScrollObserver('.item', cb);

  new MobileMenu();
});
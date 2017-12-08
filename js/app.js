document.addEventListener('DOMContentLoaded', function() {
  var navBtn = document.querySelector('.nav-btn');
  var navContainer = document.querySelector('.links');
  var navLinks = document.querySelectorAll('.links a');

  navBtn.addEventListener('click', function() {
    this.classList.toggle('click');
    navContainer.classList.toggle('open');
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1020) {
      navBtn.classList.remove('click');
      navContainer.classList.remove('open');
    }
  });
});

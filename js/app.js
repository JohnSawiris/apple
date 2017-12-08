document.addEventListener('DOMContentLoaded', function() {
  var navBtn = document.querySelector('.nav-btn');
  var navContainer = document.querySelector('.links');
  var navLinks = document.querySelectorAll('.links a');

  navBtn.addEventListener('click', function() {
    this.classList.toggle('click');
    navContainer.classList.toggle('open');
  });
});

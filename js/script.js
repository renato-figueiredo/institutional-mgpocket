$(document).ready(() => {
  var logo = $("#img-logo");
  $(document).scroll(function () {
    var scroll = $(document).scrollTop();
    if (scroll >= 147)
      $(logo).fadeIn();
    else
      $(logo).fadeOut();

  });
});

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))
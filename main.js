window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 21 || document.documentElement.scrollTop > 21) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-50px";
  }
}
const btnToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";

btnToggle.addEventListener("click", () => {
  menuHeader.classList.add(expandClass);
});

window.addEventListener("click", (e) => {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expandClass);
  }
});

// slider

$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

// show content
const wedoParent = document.querySelectorAll(".wedo-item");

wedoParent.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.classList.contains("is-active")) {
      element.classList.toggle("is-active");
      element.children[0].children[2].classList.replace(
        "fa-angle-up",
        "fa-angle-down"
      );
    } else {
      wedoParent.forEach((item) => {
        if (item.classList.contains("is-active")) {
          item.classList.remove("is-active");
          item.children[0].children[2].classList.replace(
            "fa-angle-up",
            "fa-angle-down"
          );
        }
      });
      element.classList.toggle("is-active");
      element.children[0].children[2].classList.replace(
        "fa-angle-down",
        "fa-angle-up"
      );
    }
  });
});

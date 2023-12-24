const webDevelopment = document.getElementById("development");
// console.log(webDevelopment);
const graphicDesign = document.getElementById("graphic");
const language = document.getElementById("lang");
window.addEventListener("load", function () {
  webDevelopment.style.display = "none";
  graphicDesign.style.display = "none";
  language.style.display = "none";
});
const record_video = document.getElementById("record_video");
// console.log(webDevelopment);
const launch_course = document.getElementById("launch_course");
window.addEventListener("load", function () {
  record_video.style.display = "none";
  launch_course.style.display = "none";
});
$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    // console.log(value);
    if (value == "webDeisgn") {
      $(".itemBox").show();
      $(".webDevelopment").hide();
      $(".graphicDesign").hide();
      $(".languages").hide();
    } else {
      $(".itemBox")
        .not("." + value)
        .hide();
      $(".itemBox")
        .filter("." + value)
        .show();
    }
  });

  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".list1").click(function () {
    const value1 = $(this).attr("data-filter");
    // console.log(value1);
    if (value1 == "curriculum") {
      $(".itemBox1").show();
      $(".record_video").hide();
      $(".launch_course").hide();
    } else {
      $(".itemBox1")
        .not("." + value1)
        .hide();
      $(".itemBox1")
        .filter("." + value1)
        .show();
    }
  });

  $(".list1").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Grid
  $("header .grid").click(function () {
    $("header .buttons").toggleClass("active");
    // $("#toggle").toggleClass("active");
  });

  $("header .s_btn").click(function () {
    $("header .search-div").css("display", "flex");
  });

  $("header .search-div .cross").click(function () {
    $("header .search-div").css("display", "none");
  });

  $(".counter").counterUp({
    delay: 20,
    time: 1200,
  });
  $("#close_login").click(function () {
    $(".modal-2").css("display", "none");
    $(".overlay2").css("display", "none");
  });
  $("#open_login").click(function () {
    $(".modal-2").css("display", "block");
    $(".overlay2").css("display", "block");
    $(".modal-1").css("display", "none");
    $(".overlay").css("display", "none");

    // $(".overlay").css("display", "none");
    // $(".overlay2").css("display", "block");
    // $("#close_pass").click(function () {
    //   $(".modal-3").css("display", "block");
    // });
  });

  $("#show_pas").click(function () {
    $(".modal-2").css("display", "none");
    $(".overlay2").css("display", "none");
    // $(".modal-1").css("display", "none");
    $(".modal-3").css("display", "block");
    $(".overlay3").css("display", "block");
  });
  // $("#close_pass").click(function () {
  //   $(".modal-3").css("display", "none");
  // });
  $("#close_pass").click(function () {
    $(".modal-2").css("display", "block");
    $(".overlay2").css("display", "block");

    $("#modal-3").css("display", "none");
    $(".overlay3").css("display", "none");
  });
  $(".btn--show-modal").click(function () {
    $(".modal-1").css("display", "block");
    $(".overlay").css("display", "block");
  });
});

// SLiders
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  nav: true,
  spaceBetween: 40,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper2
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  loop: true,
  nav: true,
  spaceBetween: 40,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper3
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  loop: true,
  nav: true,
  spaceBetween: 40,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper4
var swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 3,
  loop: true,
  nav: true,
  spaceBetween: 40,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
///////////////////////////
// Swiper Comment 5
var swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 3,
  loop: true,
  nav: true,
  spaceBetween: 40,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const modal = document.querySelector(".modal-1");
const modal2 = document.querySelector(".modal-2");
const modal3 = document.querySelector(".modal-3");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const overlay3 = document.querySelector(".overlay3");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnCloseModal2 = document.querySelector(".btn--close-modal2");
const btnCloseModal3 = document.querySelector(".btn--close-modal3");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnsOpenModal2 = document.querySelectorAll(".btn--show-modal2");
const btnsOpenModal3 = document.querySelectorAll(".btn--show-modal3");

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
////////////////

// Madal 2
const openModal2 = function (e) {
  e.preventDefault();
  modal2.classList.remove("hidden2");
  overlay2.classList.remove("hidden2");
};

const closeModal2 = function () {
  modal2.classList.add("hidden2");
  overlay2.classList.add("hidden2");
};

btnsOpenModal2.forEach((btn) => {
  btn.addEventListener("click", openModal2);
});

for (let i = 0; i < btnsOpenModal2.length; i++)
  btnsOpenModal2[i].addEventListener("click", openModal2);

btnCloseModal2.addEventListener("click", closeModal2);
overlay2.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden2")) {
    closeModal();
  }
});

// Madal 3
const openModal3 = function (e) {
  e.preventDefault();
  modal3.classList.remove("hidden3");
  overlay3.classList.remove("hidden3");
};

const closeModal3 = function () {
  modal3.classList.add("hidden3");
  overlay3.classList.add("hidden3");
};

btnsOpenModal3.forEach((btn) => {
  btn.addEventListener("click", openModal3);
});

for (let i = 0; i < btnsOpenModal3.length; i++)
  btnsOpenModal3[i].addEventListener("click", openModal3);

btnCloseModal3.addEventListener("click", closeModal3);
overlay3.addEventListener("click", closeModal3);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal3.classList.contains("hidden3")) {
    closeModal();
  }
});

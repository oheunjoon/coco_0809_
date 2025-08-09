console.clear();

function swiperSection1() {
  const swiper = new Swiper("#swiper-section-1 .swiper", {
    loop: true,

    // 		네비게이션
    navigation: {
      nextEl: "#swiper-section-1 .swiper-button-next",
      prevEl: "#swiper-section-1 .swiper-button-prev",
    },

    //    페이지네이션
    pagination: {
      el: "#swiper-section-1 .swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    // 	반응형
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

swiperSection1();

function scrollIconAction() {
  const scrollCon = document.querySelector(".scroll-container");
  const targetSection = document.getElementById("swiper-section-1");

  // 아이콘 클릭시 내가 원하는 섹션으로 이동
  scrollCon.addEventListener("click", () => {
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });

  window.addEventListener("scroll", () => {
    const targetRect = targetSection.getBoundingClientRect();

    if (targetRect.top <= 810) {
      scrollCon.classList.add("hide");
    } else {
      scrollCon.classList.remove("hide");
    }
  });
}

scrollIconAction();

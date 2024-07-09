import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const reviewsSlider = new Swiper('.js-reviews-slider', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  centeredSlides: true,
  loop: true,
  spaceBetween: 8,
  slidesPerView: 1.095,
  speed: 800,
  grabCursor: true,
  breakpoints: {
    1250: {
      spaceBetween: 32,
      slidesPerView: 3.65,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '.js-reviews-slider-btn-next',
    prevEl: '.js-reviews-slider-btn-prev',
  },
});

const aboutSlider = new Swiper('.js-about-slider', {
  modules: [Autoplay],
  speed: 800,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
});

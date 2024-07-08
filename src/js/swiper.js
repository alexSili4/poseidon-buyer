import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const reviewsSliderMobile = new Swiper('.js-reviews-slider-mobile', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  centeredSlides: true,
  loop: true,
  spaceBetween: 8,
  slidesPerView: 1.095,
  speed: 800,
  grabCursor: true,
  navigation: {
    nextEl: '.js-reviews-slider-btn-next',
    prevEl: '.js-reviews-slider-btn-prev',
  },
});

const reviewsSliderDesk = new Swiper('.js-reviews-slider-desk', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 32,
  slidesPerView: 3.65,
  speed: 800,
  grabCursor: true,
  navigation: {
    nextEl: '.js-reviews-slider-btn-next',
    prevEl: '.js-reviews-slider-btn-prev',
  },
});

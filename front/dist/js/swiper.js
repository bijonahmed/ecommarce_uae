// assets/js/swiper.js

import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default function initSwiper() {
  const mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

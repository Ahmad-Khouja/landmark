

import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Maldives from '../../assets/images/maldives.jpg';
import BoraBora from '../../assets/images/borabora.jpg';
import BoraBora2 from '../../assets/images/borabora2.jpg';
import Maldives2 from '../../assets/images/maldives2.jpg';
import './custom.css'


function MySwiper() {
  useEffect(() => {
    Swiper.use([Navigation]);
    new Swiper('.mySwiper', {
      slidesPerView: 2.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: false,
      pagination:true,
      navigation:true,
      loopFillGroupWithBlank: true,
      
      breakpoints: {
        1000: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        484: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        280: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        100: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    });
  }, []);

  return (
    <div >
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={Maldives} alt="Slide 1" />
          </div>
          <div className="swiper-slide">
            <img src={Maldives} alt="Slide 2" />
          </div>
          <div className="swiper-slide">
            <img src={BoraBora} alt="Slide 3" />
          </div>
          <div className="swiper-slide">
            <img src={BoraBora2} alt="Slide 4" />
          </div>
          <div className="swiper-slide">
            <img src={BoraBora} alt="Slide 5" />
          </div>
          <div className="swiper-slide">
            <img src={Maldives2} alt="Slide 6" />
          </div>

       
        </div>

       
        <div className="swiper-button-prev"></div>
 <div className="swiper-button-next"></div>
      </div>
   
      
   
      
    </div>

  );
}

export default MySwiper;
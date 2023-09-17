import React from "react";
import s from "./index.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Products } from "../products";
import { ProductsRoom } from "../productsRoom";

export const Home = () => {
  return <div>
    <header>
        <div className="presentation"></div>
    </header>
    <main>
    <div className={s.cards}>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3.5}
      breakpoints={{
        1300:{
          slidesPerView: 3.5,
          spaceBetween: 10
        },
        1000:{
          slidesPerView: 3,
          spaceBetween: 10
        },
        600:{
          slidesPerView: 2,
          spaceBetween: 5
        },
        200:{
          slidesPerView: 1,
          spaceBetween:0
        }
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <div className={s.slide}>
      <SwiperSlide className={s.swiper}>
          <img src="/src/assets/items1.jpg" alt="" className={s.card_img}/>
      </SwiperSlide>
      <SwiperSlide className={s.swiper}>
          <img src="/src/assets/items2.jpg" alt="" className={s.card_img}/>
      </SwiperSlide>
      <SwiperSlide className={s.swiper}>
          <img src="/src/assets/items3.jpg" alt="" className={s.card_img}/>
      </SwiperSlide>
      <SwiperSlide className={s.swiper}>
          <img src="/src/assets/items4.jpg" alt="" className={s.card_img}/>
      </SwiperSlide>
      <SwiperSlide className={s.swiper}>
          <img src="/src/assets/items5.jpg" alt="" className={s.card_img}/>
      </SwiperSlide>
      <SwiperSlide className={s.swiper}>
          <img src="/src/assets/items6.jpg" alt="" className={s.card_img}/>
      </SwiperSlide>
      </div>
    </Swiper>
    </div>


    <div className="container">
      <h1 className={s.category}>Shop by category</h1>
      <Products/>
    </div>

    <div className={s.main_bg}>
      <img className={s.main_bg_one} src="/src/assets/main-img-bg.gif" alt="" />
      <img className={s.main_bg_two} src="/src/assets/main-img2-bg.jpg" alt=""/>
    </div>

    <div className="container">
      <h1 className={s.category}>Shop by room</h1>
      <ProductsRoom/>
    </div>

    <div className="container">
      <div className={s.footer_bg}>
        <img className={s.footer_bg_one} src="/src/assets/footer-img-1.jpg" alt="" />
        <img className={s.footer_bg_two} src="/src/assets/footer-img-2.jpg" alt="" />
      </div>
    </div>

    <div className="container">
      <h1 className={s.category}>Shop popular brands</h1>
      <div className={s.brands}>
        <img src="/src/assets/brand-img1.jpg" alt="" />
        <img src="/src/assets/brand-img2.jpg" alt="" />
        <img src="/src/assets/brand-img3.jpg" alt="" />
        <img src="/src/assets/brand-img4.jpg" alt="" />
        <img src="/src/assets/brand-img5.jpg" alt="" />
        <img src="/src/assets/brand-img6.jpg" alt="" />
      </div>
    </div>

    </main>

  </div>;
};

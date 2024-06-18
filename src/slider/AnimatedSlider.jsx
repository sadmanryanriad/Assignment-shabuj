// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function AnimatedSlider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 70,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
          scale:1
        }}
        // pagination={true}
        initialSlide={2}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="MySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/mhZpyYV/r1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/MMhxW0D/r4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Xj6LRK9/r2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/NKXD7Vv/r5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/vDh2rtY/r3.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

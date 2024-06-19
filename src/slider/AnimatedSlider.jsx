import left from "../assets/left.png";
import right from "../assets/right.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

export default function AnimatedSlider() {
  const axiosSecure = useAxiosSecure();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `/upcoming-events`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setEvents(res?.data);
      setIsLoading(false);
    });
  }, [axiosSecure, url]);

  if (isLoading) return <div>Loading...</div>;

  const handleSlideChange = (swiper) => {
    swiper.slides.forEach((slide) => {
      slide.style.width = "600px"; // Adjusted width for non-active slides
      slide.style.height = "400px"; // Adjusted height for non-active slides
    });
    const activeSlide = swiper.slides[swiper.activeIndex];
    activeSlide.style.width = "900px"; // Increase the width for active slide
    activeSlide.style.height = "500px"; // Decrease the height for active slide
  };

  return (
    <div className="h-full md:w-[1350px] flex flex-col md:flex-row items-center justify-center">
      <div>
        <button className="swiper-button-prev hidden md:block w-14 border-2 border-white rounded-full p-2">
          <img src={left} alt="left arrow" />
        </button>
      </div>
      <div className="overflow-x-hidden m-auto w-full max-w-[400px] md:max-w-7xl flex-1">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 70,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
            scale: 1,
          }}
          initialSlide={2}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          onSlideChange={handleSlideChange}
          onSwiper={handleSlideChange}
          className="MySwiper"
        >
          {events.map((event) => (
            <SwiperSlide
              className="rounded-2xl bg-transparent"
              key={event?._id}
            >
              <picture>
                {/* Mobile image */}
                <source media="(max-width: 768px)" srcSet={event?.imgMobile} />
                {/* Desktop image */}
                <img src={event?.imgDesktop} alt="Event" />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <button className="swiper-button-next hidden md:block w-14 border-2 border-white rounded-full p-2">
          <img src={right} alt="right arrow" />
        </button>
      </div>
      <div className="flex gap-3 md:hidden">
        <button className="swiper-button-prev w-14 border-2 border-white rounded-full p-2">
          <img src={left} alt="left arrow" />
        </button>
        <button className="swiper-button-next w-14 border-2 border-white rounded-full p-2">
          <img src={right} alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

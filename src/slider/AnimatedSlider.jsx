import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
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
    <div className="overflow-x-hidden w-full max-w-[400px] md:max-w-7xl">
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
        modules={[EffectCoverflow, Pagination]}
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
  );
}

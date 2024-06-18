// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
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

  if(isLoading) return <div>Loading...</div>;

  return (
    <>
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
          slideShadows: true,
          scale: 1,
        }}
        // pagination={true}
        initialSlide={2}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="MySwiper"
      >
        {events.map((event) => {
          return (
            <SwiperSlide className="w-[70%] h-26rem" key={event?._id}>
            <picture>
              {/* Mobile image */}
              <source media="(max-width: 768px)" srcSet={event?.imgMobile} />
              {/* Desktop image */}
              <img src={event?.imgDesktop} alt="Event" />
            </picture>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}

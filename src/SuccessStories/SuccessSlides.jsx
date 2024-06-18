// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import NavigationButtons from "./NavigationButtons";
import SuccessCard from "./SuccessCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

export default function SuccessSlides() {
  const [stories, setStories] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const axiosSecure = useAxiosSecure();
  const url = `/success-story-list`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      console.log(res.data);
      setStories(res.data);
      setIsLoading(false);
    });
  }, [axiosSecure, url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {stories.map((story) => (
          <SwiperSlide key={story._id}>
            <SuccessCard
              img={story.img}
              name={story.name}
              description={story.description}
            ></SuccessCard>
          </SwiperSlide>
        ))}
        <NavigationButtons></NavigationButtons>
      </Swiper>
    </div>
  );
}

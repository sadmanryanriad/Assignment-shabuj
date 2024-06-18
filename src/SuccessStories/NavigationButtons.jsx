import { useSwiper } from "swiper/react";
import left from "../assets/previous.png";
import right from "../assets/next.png";

const NavigationButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flex gap-3">
        <button onClick={()=>swiper.slidePrev()} className="swiper-button-prev w-14 border-2 border-black rounded-full p-2">
          <img src={left} alt="left arrow" />
        </button>
        <button onClick={()=>swiper.slideNext} className="swiper-button-next w-14 border-2 border-black rounded-full p-2">
          <img src={right} alt="right arrow" />
        </button>
      </div>
    );
};

export default NavigationButtons;
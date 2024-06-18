import Marquee from "react-fast-marquee";
import MarqueeComponent from "./MarqueeComponent";

const MarqueeSection = () => {
  return (
    <div className="bg-[#4BA1FF] h-36 border flex items-center rounded-tl-3xl rounded-br-3xl">
      <div className="p-2 text-5xl font-semibold bg-[#FFFFFF] transform -rotate-2 w-full">
        <Marquee>
          <MarqueeComponent>Hello</MarqueeComponent>
          <MarqueeComponent>This</MarqueeComponent>
          <MarqueeComponent>is </MarqueeComponent>
          <MarqueeComponent>a </MarqueeComponent>
          <MarqueeComponent>Test</MarqueeComponent>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSection;

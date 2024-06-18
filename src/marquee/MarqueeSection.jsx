import Marquee from "react-fast-marquee";
import MarqueeComponent from "./MarqueeComponent";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const MarqueeSection = () => {
  const axiosSecure = useAxiosSecure();
  const [marqueeList, setMarqueeList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const url = `/marquee-list`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setMarqueeList(res.data);
      setIsLoading(false);
    });
  }, [axiosSecure, url]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-[#4BA1FF] h-36 border flex items-center rounded-tl-3xl rounded-br-3xl">
      <div className="p-2 text-5xl font-semibold bg-[#FFFFFF] transform -rotate-2 w-full">
        <Marquee>
          {
            marqueeList.map(marq=>{
                return <MarqueeComponent key={marq?._id}>{marq?.marqueeText}</MarqueeComponent>
            })
          }
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSection;

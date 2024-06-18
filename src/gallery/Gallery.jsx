import Marquee from "react-fast-marquee";
import GalleryCard from "./GalleryCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const Gallery = () => {
    const [events, setEvents] = useState({});
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const url = `/event-list`;
    useEffect(() => {
        const fetchData = async () => {
            const result = await axiosSecure.get(url);
            setEvents(result.data);
            setLoading(false);
        };
        fetchData();
    }, [axiosSecure, url]);

// Repeat events array if necessary to meet the minimum requirement
let repeatedEvents = events;
while (repeatedEvents.length < 10) {
    repeatedEvents = repeatedEvents.concat(events);
}
    if(loading){
        return <h1>Loading...</h1>
    }

  return (
    <div className="w-full bg-[#0E32B7]">
        <h1 className="text-7xl font-bold my-10 text-center text-gray-100">Image Gallery</h1>
        {/* gallery-1  */}
      <Marquee speed={60} pauseOnHover={true} direction="left">
        <div className="flex space-x-8 justify-around items-center mr-8">
          {repeatedEvents.slice(0, 10).map((event,index) => {
            return <GalleryCard key={event._id+index} img={event.img} name={event.name} description={event.description} />;
          })}
        </div>
      </Marquee>
        {/* gallery-2  */}
      <Marquee speed={60} pauseOnHover={true} direction="right">
        <div className="flex space-x-8 justify-around items-center mr-8">
          {repeatedEvents.slice(0, 10).map((event,index) => {
            return <GalleryCard key={event._id+index} img={event.img} name={event.name} description={event.description} />;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;

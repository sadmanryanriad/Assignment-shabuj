import Marquee from "react-fast-marquee";
import GalleryCard from "./GalleryCard";
const events = [
    {
        img: "https://i.ibb.co/fqxmFSs/g7.jpg",
        name: "event-1",
        description: "Short description of the event, may be add date, location and other information."
    },
    {
        img: "https://i.ibb.co/xSKVHQv/g1.jpg",
        name: "event-2",
        description: "Short description of the event, may be add date, location and other information."
    },
    {
        img: "https://i.ibb.co/WGC3MxG/g2.jpg",
        name: "event-3",
        description: "Short description of the event, may be add date, location and other information."
    },
    {
        img: "https://i.ibb.co/64KffsT/g3.jpg",
        name: "event-4",
        description: "Short description of the event, may be add date, location and other information."
    },
    {
        img: "https://i.ibb.co/vJv7PNH/g4.jpg",
        name: "event-5",
        description: "Short description of the event, may be add date, location and other information."
    },
    {
        img: "https://i.ibb.co/mC8CHzM/g5.jpg",
        name: "event-6",
        description: "Short description of the event, may be add date, location and other information."
    },
    {
        img: "https://i.ibb.co/xjCj18N/g6.jpg",
        name: "event-7",
        description: "Short description of the event, may be add date, location and other information."
    }
];

// Repeat events array if necessary to meet the minimum requirement
let repeatedEvents = events;
while (repeatedEvents.length < 10) {
    repeatedEvents = repeatedEvents.concat(events);
}

const Gallery = () => {
  return (
    <div className="w-full bg-[#0E32B7]">
        <h1 className="text-7xl font-bold my-10 text-center text-gray-100">Image Gallery</h1>
        {/* gallery-1  */}
      <Marquee speed={60} pauseOnHover={true} direction="left">
        <div className="flex space-x-8 justify-around items-center mr-8">
          {repeatedEvents.slice(0, 10).map((event) => {
            return <GalleryCard key={event} img={event.img} name={event.name} description={event.description} />;
          })}
        </div>
      </Marquee>
        {/* gallery-2  */}
      <Marquee speed={60} pauseOnHover={true} direction="right">
        <div className="flex space-x-8 justify-around items-center mr-8">
          {repeatedEvents.slice(0, 10).map((event) => {
            return <GalleryCard key={event} img={event.img} name={event.name} description={event.description} />;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;

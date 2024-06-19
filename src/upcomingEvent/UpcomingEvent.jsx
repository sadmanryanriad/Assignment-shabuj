import AnimatedSlider from "../slider/AnimatedSlider";

const UpcomingEvent = () => {
    return (
        <div className="w-full bg-[#0A29B5] h-screen flex items-center justify-center">
            <div>
            <h1 className="text-4xl font-semibold text-[#50EAD8] text-center md:absolute top-10 left-[40%]">Upcoming Events</h1>
            <AnimatedSlider></AnimatedSlider>
            </div>
        </div>
    );
};

export default UpcomingEvent;
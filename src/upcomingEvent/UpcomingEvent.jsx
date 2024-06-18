import Container from "../components/Container";
import AnimatedSlider from "../slider/AnimatedSlider";

const UpcomingEvent = () => {
    return (
        <div className="w-full bg-[#0A29B5] h-screen flex items-center justify-center">
            <div>
            <h1 className="text-4xl font-semibold mb-5 text-[#50EAD8] text-center">Upcoming Events</h1>
            <Container><AnimatedSlider></AnimatedSlider></Container>
            </div>
        </div>
    );
};

export default UpcomingEvent;
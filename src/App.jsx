import UpcomingEvent from "./upcomingEvent/UpcomingEvent";

import ConsultationForm from "./form/ConsultationForm";

import Gallery from "./gallery/Gallery";

import SuccessStories from "./SuccessStories/SuccessStories";
import MarqueeSection from "./marquee/MarqueeSection";
import Gap from "./components/Gap";
import CoreStrength from "./coreStrength/CoreStrength";

export default function App() {
  return (
    <div className="bg-white">
      <UpcomingEvent></UpcomingEvent>
      <Gap></Gap>
      <CoreStrength></CoreStrength>
      <MarqueeSection></MarqueeSection>
      <Gap></Gap>
      <SuccessStories></SuccessStories>
      <Gap></Gap>
      <Gallery></Gallery>
      <ConsultationForm></ConsultationForm>
    </div>
  );
}

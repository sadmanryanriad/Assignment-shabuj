import UpcomingEvent from "./upcomingEvent/UpcomingEvent";

import Gallery from "./gallery/Gallery";

import SuccessStories from "./SuccessStories/SuccessStories";
import MarqueeSection from "./marquee/MarqueeSection";
import Gap from "./components/Gap";

export default function App() {
  return (
    <>
      <UpcomingEvent></UpcomingEvent>
      <Gap></Gap>
      <MarqueeSection></MarqueeSection>
      <Gap></Gap>
      <SuccessStories></SuccessStories>
      <Gap></Gap>
      <Gallery></Gallery>
    </>
  );
}

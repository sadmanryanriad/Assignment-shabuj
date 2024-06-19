import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import AdminDashboard from "../adminDashboard/AdminDashboard";
import UpcomingEvents from "../adminDashboard/UpcomingEvents";
import SuccessStories from "../adminDashboard/SuccessStories";
import MarqueeSection from "../adminDashboard/MarqueeSection";
import ImageGallery from "../adminDashboard/ImageGallery";
import ConsultationForm from "../adminDashboard/ConsultationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "admin",
    element: <AdminDashboard />,
    errorElement: <ErrorPage />,
    children: [
      { path: "upcoming-events", element: <UpcomingEvents /> },
      { path: "success-stories", element: <SuccessStories /> },
      { path: "marquee-section", element: <MarqueeSection /> },
      { path: "image-gallery", element: <ImageGallery /> },
      { path: "consultation-form", element: <ConsultationForm /> }
    ]
  }
]);

export default router;

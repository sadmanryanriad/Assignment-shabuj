import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import useImgBBUploader from "../hooks/useImgBBUploader"; 

const UpcomingEvents = () => {
  const axiosSecure = useAxiosSecure();
  const url = `upcoming-events`;
  const [events, setEvents] = useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);
  const imgBBAPIKey = "17e8bae7e29a64c3e5d5ec8f854a5c34"; 

  const {
    idLoading: isUploadingDesktop,
    imageUrl: desktopImageUrl,
    uploadImage: uploadDesktopImage,
    error: desktopImageError,
  } = useImgBBUploader(imgBBAPIKey);
  const {
    isLoading: isUploadingMobile,
    imageUrl: mobileImageUrl,
    uploadImage: uploadMobileImage,
    error: mobileImageError,
  } = useImgBBUploader(imgBBAPIKey);

  const reFetch = () => {
    axiosSecure
      .get(url)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosSecure
      .get(url)
      .then((res) => {
        setEvents(res.data);
        setIsLoadingEvents(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure, url]);

  const handleDelete = (id) => {
    axiosSecure
      .delete(`${url}/${id}`)
      .then(() => {
        reFetch();
        toast.success("Event deleted successfully");
      })
      .catch((err) => {
        toast.error("Error deleting event");
        console.log(err);
      });
  };

  const handleAddEvent = async () => {
    // Ensure both images are uploaded before proceeding
    if (!desktopImageUrl || !mobileImageUrl) {
      toast.error("Please upload both desktop and mobile images.");
      return;
    }
    // Adding event with uploaded image URLs
    try {
      const newEvent = {
        imgDesktop: desktopImageUrl,
        imgMobile: mobileImageUrl,
      };
      await axiosSecure.post(url, newEvent);
      reFetch();
      toast.success("Event added successfully");
      uploadDesktopImage(null);
      uploadMobileImage(null);
    } catch (err) {
      toast.error("Error adding event");
      console.error(err);
    }
  };

  // Function to handle desktop image upload
  const handleDesktopImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await uploadDesktopImage(file);
    }
  };

  // Function to handle mobile image upload
  const handleMobileImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await uploadMobileImage(file);
    }
  };

  if (isLoadingEvents) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Upcoming Events</h1>
      <div className="mb-4 text-right">
        <div className="flex space-x-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleDesktopImageUpload}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleMobileImageUpload}
          />
          <button
            onClick={handleAddEvent}
            className={`bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 ${
              (!desktopImageUrl || !mobileImageUrl) &&
              "opacity-50 cursor-not-allowed"
            }`}
            disabled={!desktopImageUrl || !mobileImageUrl}
          >
            Add Event
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Desktop Image
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Mobile Image
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr
                key={event._id}
                className="bg-white border-b border-gray-300 rounded-xl"
              >
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img
                    src={event.imgDesktop}
                    alt="Desktop"
                    className="w-32 h-20 object-cover rounded-xl"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img
                    src={event.imgMobile}
                    alt="Mobile"
                    className="w-32 h-20 object-cover rounded-xl"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrashAlt className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingEvents;

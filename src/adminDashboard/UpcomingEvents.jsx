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
  const [isUploading, setIsUploading] = useState(false);
  const imgBBAPIKey = import.meta.env.VITE_BB_API_KEY;

  const {
    imageUrl: desktopImageUrl,
    uploadImage: uploadDesktopImage,
  } = useImgBBUploader(imgBBAPIKey);

  const {
    imageUrl: mobileImageUrl,
    uploadImage: uploadMobileImage,
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
    if (!desktopImageUrl || !mobileImageUrl) {
      toast.error("Please upload both desktop and mobile images.");
      return;
    }

    try {
      setIsLoadingEvents(true); // Set isLoadingEvents to true during image upload
      const newEvent = {
        imgDesktop: desktopImageUrl,
        imgMobile: mobileImageUrl,
      };
      await axiosSecure.post(url, newEvent);
      reFetch();
      toast.success("Event added successfully");
    } catch (err) {
      toast.error("Error adding event");
      console.error(err);
    } finally {
      setIsLoadingEvents(false); // Set isLoadingEvents to false after image upload completes
      uploadDesktopImage(null); // Clear desktop image URL
      uploadMobileImage(null); // Clear mobile image URL
    }
  };

  const handleDesktopImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      await uploadDesktopImage(file);
    }
    setIsUploading(false);
  };

  const handleMobileImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      await uploadMobileImage(file);
    }
    setIsUploading(false);
  };

  if (isLoadingEvents) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Upcoming Events</h1>
      <div className="mb-4 text-right">
        <div className="flex flex-col md:flex-row md:justify-left items-center space-y-2 md:space-x-4 border w-fit p-2 bg-green-400 rounded-xl">
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
            {isUploading? <span className="loading loading-spinner text-primary"></span> : "Add Event"}
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

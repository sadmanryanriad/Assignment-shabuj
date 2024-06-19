import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt } from 'react-icons/fa'; // Import the delete icon

const UpcomingEvents = () => {
  const axiosSecure = useAxiosSecure();
  const url = `upcoming-events`;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axiosSecure.get(url)
      .then(res => {
        setEvents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [axiosSecure, url]);

  const handleDelete = (id) => {
    axiosSecure.delete(`${url}/${id}`)
      .then(() => {
        setEvents(events.filter(event => event._id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleAddEvent = () => {
    // Logic to add an event (e.g., open a modal to fill out event details)
    console.log("Add Event button clicked");
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Upcoming Events</h1>
      <div className="mb-4 text-right">
        <button
          onClick={handleAddEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          Add Event
        </button>
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
              <tr key={event._id} className="bg-white border-b border-gray-300 rounded-xl">
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img src={event.imgDesktop} alt="Desktop" className="w-32 h-20 object-cover rounded-xl" />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img src={event.imgMobile} alt="Mobile" className="w-32 h-20 object-cover rounded-xl" />
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

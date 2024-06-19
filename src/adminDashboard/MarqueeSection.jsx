import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const MarqueeSection = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newMarqueeText, setNewMarqueeText] = useState("");
  const url = 'marquee-list';

  const reFetch = () => {
    setIsLoading(true);
    axiosSecure
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    reFetch();
  }, []);

  const handleDelete = (id) => {
    axiosSecure
      .delete(`${url}/${id}`)
      .then(() => {
        reFetch();
        toast.success("Marquee text deleted successfully");
      })
      .catch((err) => {
        toast.error("Error deleting marquee text");
        console.error(err);
      });
  };

  const handleAddMarqueeText = (e) => {
    e.preventDefault();
    axiosSecure
      .post(url, { marqueeText: newMarqueeText })
      .then(() => {
        reFetch();
        toast.success("Marquee text added successfully");
        setNewMarqueeText("");
      })
      .catch((err) => {
        toast.error("Error adding marquee text");
        console.error(err);
      });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Marquee Section</h1>
      
      <form onSubmit={handleAddMarqueeText} className="mb-6">
        <h2 className="text-2xl mb-4">Add New Marquee Text</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Marquee Text"
            value={newMarqueeText}
            onChange={(e) => setNewMarqueeText(e.target.value)}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
          Add Marquee Text
        </button>
      </form>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Marquee Text
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((marquee) => (
              <tr key={marquee._id} className="bg-white border-b border-gray-300 rounded-xl">
                <td className="px-6 py-4 whitespace-no-wrap">{marquee.marqueeText}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    onClick={() => handleDelete(marquee._id)}
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

export default MarqueeSection;

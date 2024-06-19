import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const SuccessStories = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newStory, setNewStory] = useState({ img: "", name: "", description: "" });
  const url = 'success-story-list';

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
        toast.success("Story deleted successfully");
      })
      .catch((err) => {
        toast.error("Error deleting story");
        console.error(err);
      });
  };

  const handleAddStory = (e) => {
    e.preventDefault();
    axiosSecure
      .post(url, newStory)
      .then(() => {
        reFetch();
        toast.success("Story added successfully");
        setNewStory({ img: "", name: "", description: "" });
      })
      .catch((err) => {
        toast.error("Error adding story");
        console.error(err);
      });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Success Stories</h1>
      
      <form onSubmit={handleAddStory} className="mb-6">
        <h2 className="text-2xl mb-4">Add New Story</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Image URL"
            value={newStory.img}
            onChange={(e) => setNewStory({ ...newStory, img: e.target.value })}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newStory.name}
            onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Description"
            value={newStory.description}
            onChange={(e) => setNewStory({ ...newStory, description: e.target.value })}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Story
        </button>
      </form>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((story) => (
              <tr key={story._id} className="bg-white border-b border-gray-300 rounded-xl">
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img src={story.img} alt={story.name} className="w-32 h-20 object-cover rounded-xl" />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{story.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{story.description.slice(0,100)}...</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    onClick={() => handleDelete(story._id)}
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

export default SuccessStories;

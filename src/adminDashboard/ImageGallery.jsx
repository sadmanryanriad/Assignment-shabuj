import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import useImgBBUploader from "../hooks/useImgBBUploader";

const ImageGallery = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newImage, setNewImage] = useState({ img: "", name: "", description: "" });
  const [isUploading, setIsUploading] = useState(false);
  const url = "event-list";

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
        toast.success("Image deleted successfully");
      })
      .catch((err) => {
        toast.error("Error deleting image");
        console.error(err);
      });
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    if (!newImage.img) {
      toast.error("Please upload an image");
      return;
    }
    axiosSecure
      .post(url, newImage)
      .then(() => {
        reFetch();
        toast.success("Image added successfully");
        setNewImage({ img: "", name: "", description: "" });
      })
      .catch((err) => {
        toast.error("Error adding image");
        console.error(err);
      });
  };

  const api = import.meta.env.VITE_BB_API_KEY;
  const { uploadImage, imageUrl } = useImgBBUploader(api);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      await uploadImage(file);
      setNewImage({ ...newImage, img: imageUrl });
      setIsUploading(false);
    }
  };

  useEffect(() => {
    if (imageUrl) {
      setNewImage((prev) => ({ ...prev, img: imageUrl }));
    }
  }, [imageUrl]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Image Gallery</h1>
      
      <form onSubmit={handleAddImage} className="mb-6">
        <h2 className="text-2xl mb-4">
          {isUploading ? (
            <span className="loading loading-spinner text-primary"></span>
          ) : (
            "Add New Image"
          )}
        </h2>
        <div className="mb-4">
          <input type="file" accept="image/*" onChange={handleImageUpload} required />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newImage.name}
            onChange={(e) => setNewImage({ ...newImage, name: e.target.value })}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Description"
            value={newImage.description}
            onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
            className="border px-4 py-2 rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 ${
            isUploading || !newImage.img ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isUploading || !newImage.img}
        >
          Add Image
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
            {data.map((event) => (
              <tr key={event._id} className="bg-white border-b border-gray-300 rounded-xl">
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img src={event.img} alt={event.name} className="w-32 h-20 object-cover rounded-xl" />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{event.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{event.description.slice(0, 100)}...</td>
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

export default ImageGallery;

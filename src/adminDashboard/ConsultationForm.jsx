import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const ConsultationForm = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "consultation-forms";

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
        toast.success("Consultation deleted successfully");
      })
      .catch((err) => {
        toast.error("Error deleting consultation");
        console.error(err);
      });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Consultation Form</h1>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Study Destination
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Study Year
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Study Intake
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Agree
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b border-gray-300 rounded-xl"
              >
                <td className="px-6 py-4 whitespace-no-wrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item.countryCode} {item.phone}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item.studyDestination}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item.studyYear}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item.studyIntake}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item.agree ? "Yes" : "No"}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default ConsultationForm;

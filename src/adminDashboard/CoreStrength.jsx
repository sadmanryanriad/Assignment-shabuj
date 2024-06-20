import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { BiEdit, BiSave } from "react-icons/bi";

const CoreStrength = () => {
  const axiosSecure = useAxiosSecure();
  const url = "core-strength";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    globalOffice: 0,
    uKEducationFaire: 0,
    coursesOffered: 0,
    globalCounsellors: 0,
    recruitingUniversity: 0,
    studentServed: 0,
  });

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(url)
      .then((res) => {
        const fetchedData = res.data[0];
        // console.log(fetchedData);
        setData(fetchedData);
        setFormData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosSecure, url]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleSave = () => {
    // console.log(formData);
    axiosSecure
      .patch(`${url}/${data._id}`, formData)
      .then(() => {
        // console.log(res.data);
        setData(formData);
        setIsEditing(false);
        toast.success("Core strength updated successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update core strength");
      });
  };

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>; // Handle case when no data is available

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Core Strength</h1>

      <div className="overflow-x-auto rounded-xl shadow-lg max-w-[90%] m-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Global Office
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                UK Education Faire
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Courses Offered
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Global Counsellors
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Recruiting University
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Student Served
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Edit Number
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-300 rounded-xl">
              <td className="px-6 py-4 text-lg">
                {isEditing ? (
                  <input
                    type="number"
                    name="globalOffice"
                    value={formData.globalOffice}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  data?.globalOffice
                )}
              </td>
              <td className="px-6 py-4 text-lg">
                {isEditing ? (
                  <input
                    type="number"
                    name="uKEducationFaire"
                    value={formData.uKEducationFaire}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  data?.uKEducationFaire
                )}
              </td>
              <td className="px-6 py-4 text-lg">
                {isEditing ? (
                  <input
                    type="number"
                    name="coursesOffered"
                    value={formData.coursesOffered}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  data?.coursesOffered
                )}
              </td>
              <td className="px-6 py-4 text-lg">
                {isEditing ? (
                  <input
                    type="number"
                    name="globalCounsellors"
                    value={formData.globalCounsellors}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  data?.globalCounsellors
                )}
              </td>
              <td className="px-6 py-4 text-lg">
                {isEditing ? (
                  <input
                    type="number"
                    name="recruitingUniversity"
                    value={formData.recruitingUniversity}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  data?.recruitingUniversity
                )}
              </td>
              <td className="px-6 py-4 text-lg">
                {isEditing ? (
                  <input
                    type="number"
                    name="studentServed"
                    value={formData.studentServed}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  data?.studentServed
                )}
              </td>
              <td className="px-6 py-4 text-lg">
                {isEditing ? (
                  <button
                    onClick={handleSave}
                    className="text-green-600 hover:text-green-800 text-lg"
                  >
                    <span className="flex justify-center items-center gap-2">Save <BiSave></BiSave></span>
                  </button>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-600 hover:text-blue-800 text-lg"
                  >
                    <span className="flex justify-center items-center gap-2">Edit <BiEdit></BiEdit></span>
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoreStrength;

import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+880",
    studyDestination: "",
    studyYear: "",
    studyIntake: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      countryCode,
      studyDestination,
      studyYear,
      studyIntake,
      agree,
    } = formData;
    if (
      !name ||
      !email ||
      !phone ||
      !countryCode ||
      !studyDestination ||
      !studyYear ||
      !studyIntake ||
      !agree
    ) {
      alert("Please fill out all fields.");
      return;
    }
    // Handle form submission
    // console.log("Form submitted:", formData);
    axiosSecure.post('consultation-forms', formData).then(res=>{
      // console.log(res.data);
      if(res?.data?.acknowledged) alert("Your form has been submitted successfully.");
    })
      .catch(err=>console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">
          Its Time to Start Your Journey With Us
        </h2>
        <p className="mb-6">
          Book Your <span className="bg-green-300 p-1">FREE</span> Consultation
          with Certified Counsellors
        </p>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4 flex">
          <input
            type="text"
            name="countryCode"
            placeholder="+880"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-1/4 p-2 border border-gray-300 rounded-l"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-3/4 p-2 border border-gray-300 rounded-r"
            required
          />
        </div>
        <div className="mb-4">
          <select
            name="studyDestination"
            value={formData.studyDestination}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>
              Preferred Study Destination
            </option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="Europe">Europe</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <select
            name="studyYear"
            value={formData.studyYear}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>
              Preferred Study Year
            </option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <select
            name="studyIntake"
            value={formData.studyIntake}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>
              Preferred Study Intake
            </option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="BBA">BBA</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label>
            By clicking you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              Terms & Conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg"
        >
          Book Free Counselling
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;

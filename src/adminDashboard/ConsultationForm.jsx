import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ConsultationForm = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = 'success-story-list';

  useEffect(() => {
    axiosSecure
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure, url]);
  return (
    <div>
      <h1 className="text-2xl font-bold">Consultation Form</h1>
      Add your content here
    </div>
  );
};

export default ConsultationForm;

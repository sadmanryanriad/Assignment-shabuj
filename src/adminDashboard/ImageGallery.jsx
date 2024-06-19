import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ImageGallery = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "event-list";

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
      <h1 className="text-2xl font-bold">Image Gallery</h1>
      Add your content here
    </div>
  );
};

export default ImageGallery;

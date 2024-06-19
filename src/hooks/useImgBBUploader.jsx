// hooks/useImgBBUploader.js
import { useState } from 'react';

const useImgBBUploader = (apiKey) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const uploadImage = async (imageFile) => {
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await fetch('https://api.imgbb.com/1/upload?key=' + apiKey, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setImageUrl(data.data.url);
    } catch (err) {
      setError(err.message || 'Failed to upload image');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, imageUrl, error, uploadImage };
};

export default useImgBBUploader;

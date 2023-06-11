import React, { useState, useEffect, useCallback } from "react";

const SlideImages = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = useCallback(() => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextImage]);

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="relative w-[1024px] m-auto">
      <img className="w-full h-auto" src={images[currentImage]} alt="" />
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded font-bold text-2xl"
        onClick={previousImage}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded font-bold text-2xl"
        onClick={nextImage}
      >
        &#10095;
      </button>
    </div>
  );
};

export default SlideImages;

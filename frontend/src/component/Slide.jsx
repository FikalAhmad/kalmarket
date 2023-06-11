import React from "react";
import SlideImages from "./SlideImages";
import gambar1 from "../images/slideimagehome.png";
import gambar2 from "../images/slideimagehome1.png";
import gambar3 from "../images/slideimagehome2.png";

const Slide = () => {
  const images = [gambar1, gambar2, gambar3];

  return (
    <div className="container mx-auto mt-4">
      <SlideImages images={images} />
    </div>
  );
};

export default Slide;

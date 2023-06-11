import React from "react";
import { Link } from "react-router-dom";

const Button = ({ value, link, fill, block }) => {
  const fillStyle = fill
    ? "bg-ijo-muda text-white hover:bg-ijo-tua"
    : "border-2 border-ijo-muda hover:text-white hover:bg-ijo-muda";

  const blockStyle = block ? "mx-0 my-auto mr-0" : "";
  return (
    <button
      className={`text-ijo-muda mr-5 py-2 ${fillStyle} ${blockStyle} rounded-md duration-300`}
    >
      <Link to={link} className="py-2 px-8">
        {value}
      </Link>
    </button>
  );
};

export default Button;

import React from "react";

const CardProduct = ({ image, title, price, rating }) => {
  console.log(image);
  return (
    <div className="h-96 mx-1">
      <div className="rounded-2xl border-[1px] shadow-xl min-h-[400px]">
        <div className="p-5 bg-gray-300 rounded-t-2xl">
          <img className="w-full m-auto" src={image} alt=""></img>
        </div>
        <div className="px-5">
          <p className="flex items-center font-jakartalight text-[20px] h-16 my-2">
            {title}
          </p>
          <p className="font-jakartabold">{price}</p>
          <img className="w-24 mt-1" src={rating} alt=""></img>
        </div>
      </div>
    </div>
  );
};

const ProductItems = ({ items }) => {
  const productListAfterMap = items.map((item, index) => (
    <CardProduct
      key={index}
      image={item.image}
      title={item.title}
      price={item.price}
      rating={item.rating}
    />
  ));

  return (
    <>
      <div className="flex justify-evenly mx-[80px]">{productListAfterMap}</div>
    </>
  );
};
export default ProductItems;

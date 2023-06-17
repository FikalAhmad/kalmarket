import React from "react";
import tshirt from "../images/baju.png";
import shoes from "../images/sepatunike.png";
import jeans from "../images/celanajeans.png";
import gamingchair from "../images/kursigaming.png";
import laptop from "../images/laptop.png";
import blima from "../images/b5.png";
import bempat from "../images/b4.png";
import ProductItems from "./ProductItems";

const ProductList = () => {
  const productList = [
    {
      image: tshirt,
      title: "T-SHIRT BLACK",
      price: "Rp. 120,000",
      rating: blima,
    },
    {
      image: shoes,
      title: "SEPATU ADIDAS BLACK",
      price: "Rp. 550,000",
      rating: blima,
    },
    {
      image: jeans,
      title: "JEANS WANITA",
      price: "Rp. 450,000",
      rating: bempat,
    },
    {
      image: gamingchair,
      title: "KURSI GAMING",
      price: "Rp. 450,000",
      rating: bempat,
    },
    {
      image: laptop,
      title: "MACBOOK M1 PRO",
      price: "Rp. 450,000",
      rating: bempat,
    },
  ];

  return (
    <>
      <div className="font-jakartaregular">
        <section className="w-48 text-3xl font-jakartabold mx-[80px] mt-16 mb-5 border-b-4">
          Top Products
        </section>
        <ProductItems items={productList} />
      </div>
    </>
  );
};

export default ProductList;

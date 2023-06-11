import tshirt from "../images/tshirt.png";
import shoes from "../images/shoes.png";
import jeans from "../images/jeans.png";
import blima from "../images/b5.png";
import bempat from "../images/b4.png";

const TopProduk = () => {
  return (
    <div className="font-jakartaregular">
      <section className="text-3xl font-jakartabold mx-28 mt-16 mb-5">
        Top Products
      </section>
      <div className="flex justify-evenly">
        <div className="border-4 rounded-3xl p-5">
          <div className="bg-gray-300 rounded-2xl px-7 py-12">
            <img className="w-48 m-auto" src={jeans} alt=""></img>
          </div>
          <div>
            <p className="font-jakartalight text-2xl py-5">JEANS WANITA</p>
            <p className="font-jakartabold">Rp. 450,000</p>
            <img className="w-24 mt-1" src={blima} alt=""></img>
          </div>
        </div>
        <div className="border-4 rounded-3xl p-5">
          <div className="bg-gray-300 rounded-2xl px-3 py-12">
            <img className="w-60 m-auto" src={tshirt} alt=""></img>
          </div>
          <div>
            <p className="font-jakartalight text-2xl py-5">T-SHIRT BLACK</p>
            <p className="font-jakartabold">Rp. 120,000</p>
            <img className="w-24 mt-1" src={bempat} alt=""></img>
          </div>
        </div>
        <div className="border-4 rounded-3xl p-5">
          <div className="bg-gray-300 rounded-2xl px-1 py-12">
            <img className="w-48 m-auto" src={shoes} alt=""></img>
          </div>
          <div>
            <p className="font-jakartalight text-2xl py-5">
              SEPATU ADIDAS BLACK
            </p>
            <p className="font-jakartabold">Rp. 550,000</p>
            <img className="w-24 mt-1" src={blima} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProduk;

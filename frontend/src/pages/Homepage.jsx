import { NavbarHomepage } from "../component/Navbar";
import Product from "../component/TopProduk";
import tshirt from "../images/tshirt.png";
import shoes from "../images/shoes.png";
import jeans from "../images/jeans.png";
import Footer from "../component/Footer";
import Subscribe from "../component/Subscribe";
import FrequentlyAskQuestion from "../component/FrequentlyAskQuestion";
import Slide from "../component/Slide";

const Homepage = () => {
  return (
    <div>
      <NavbarHomepage />
      <Slide />
      <br />
      <div className="flex justify-evenly font-jakartaregular">
        <div className="flex w-1/4 h-32 bg-coklat-krem rounded-lg text-white">
          <div className="p-5">
            <p className="text-3xl font-jakartabold">T-Shirt</p>
            <button className="mt-3 text-coklat-krem bg-white px-3 py-2 rounded-md text-sm">
              Beli Sekarang
            </button>
          </div>
          <img className="w-40 m-auto" src={tshirt} alt=""></img>
        </div>
        <div className="flex w-1/4 h-32 bg-gray-300 rounded-lg text-black">
          <div className="p-5">
            <p className="text-3xl font-jakartabold">Sepatu</p>
            <button className="mt-3 text-gray-300 bg-black px-3 py-2 rounded-md text-sm">
              Beli Sekarang
            </button>
          </div>
          <img className="w-32 m-auto" src={shoes} alt=""></img>
        </div>
        <div className="flex w-1/4 h-32 bg-ijo-muda rounded-lg text-white">
          <div className="p-5">
            <p className="text-3xl font-jakartabold">Jeans</p>
            <button className="mt-3 text-ijo-muda bg-white px-3 py-2 rounded-md text-sm">
              Beli Sekarang
            </button>
          </div>
          <img className="w-32 m-auto" src={jeans} alt=""></img>
        </div>
      </div>
      <Product />
      <Subscribe />
      <FrequentlyAskQuestion />
      <Footer />
    </div>
  );
};

export default Homepage;

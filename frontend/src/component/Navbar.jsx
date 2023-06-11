import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
// import Button from "./Button";

export const NavbarHomepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  // const goToLogin = () => (window.location.href = "/login");

  return (
    <>
      <nav className="flex justify-around py-6 border-t-4 border-ijo-muda items-center font-jakartamedium">
        <section className="text-2xl font-jakartabold text-ijo-muda sm:text-md">
          KAL MARKET
        </section>
        <ul className="flex items-center w-96 justify-evenly">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <div className="relative">
            <button
              className="block focus:outline-none"
              onClick={toggleDropdown}
            >
              <span className="flex w-full items-center">
                Kategori
                <i className="fi fi-sr-angle-small-down pl-1 h-[18px]"></i>
              </span>
            </button>

            {isOpen && (
              <div className="absolute z-10 w-52 py-2 mt-1 bg-white rounded-md shadow-lg">
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  T-Shirt
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sepatu
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Jeans
                </Link>
              </div>
            )}
          </div>
          <li className="">
            <Link to="/promo">Promo</Link>
          </li>
        </ul>
        <div className="flex">
          <Button value="Login" link="/login" />
          <Button value="Daftar" link="/daftar" fill />
        </div>
      </nav>
    </>
  );
};

export const NewNavbar = () => {
  return (
    <>
      <nav></nav>
    </>
  );
};

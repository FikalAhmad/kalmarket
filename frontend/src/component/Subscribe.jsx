import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-gray-300 font-jakartaregular my-20">
      <div className="flex flex-col items-center p-20">
        <section className="font-jakartabold text-4xl">
          Let's Keep In Touch
        </section>
        <p>Subscribe untuk dapatkan diskon 15% untuk Pemesanan Pertama</p>
        <div>
          <form className="mt-5" action="">
            <input className="rounded-l-lg w-96 h-10 p-3" type="email"></input>
            <button
              className="px-8 py-2 text-white bg-black rounded-r-lg"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

import React, { useState } from "react";

const ExperimentPage = () => {
  const [count, setCount] = useState(0);
  const [foods, setFoods] = useState(["Burger", "Nasi Goreng"]);
  const [inputValue, setInputValue] = useState("");

  const plusSatu = () => {
    setCount(count + 1);
  };
  const minusSatu = () => {
    setCount(count - 1);
  };

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  const handlePrevent = (e) => {
    e.preventDefault();
    setFoods((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <div className="grid place-items-center">
        Counted
        <div>{count}</div>
        <button className="border-1 border-emerald-300" onClick={plusSatu}>
          +1
        </button>
        <button className="border-1 border-emerald-300" onClick={minusSatu}>
          -1
        </button>
      </div>
      <div className="grid place-items-center mt-40">
        Makanan
        <form onSubmit={handlePrevent}>
          <input
            type="text"
            className="border-2 border-ijo-tua"
            value={inputValue}
            onChange={handleChange}
          ></input>
          <button className="border-3 border-ijo-muda" type="submit">
            Tambah Makanan
          </button>
        </form>
        <div>
          {foods.map((food, index) => (
            <div className="bg-red-500" key={index}>
              {food}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperimentPage;

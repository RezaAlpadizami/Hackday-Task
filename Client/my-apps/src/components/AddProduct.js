import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CurrencyFormat from "react-currency-format";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  const handleChangeTitle = (e) => setTitle(e.target.value);

  const handleChangePrice = (e) => setPrice(e.target.value);

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3001/product`, {
      title: title,
      price: price,
    });
    history.push("/");
  };

  return (
    <div className="mt-60">
      <div className="w-screen flex flex-col items-center justify-center">
        <div className="mb-6">
          <h1 className="text-gray-700 text-5xl mb-5">Add Items</h1>
        </div>
        <form
          className="w-full max-w-lg flex flex-col justify-center items-center"
          onSubmit={saveProduct}
        >
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleChangeTitle}
              required
            />
          </div>
          <div className="w-full mt-6  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Price
            </label>
            <CurrencyFormat
              thousandSeparator={true}
              prefix={"Rp "}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Price"
              value={price}
              onChange={handleChangePrice}
              required
            />
          </div>
          <button type="submit" className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import CurrencyFormat from "react-currency-format";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const handleChangeTitle = (e) => setTitle(e.target.value);

  const handleChangePrice = (e) => setPrice(e.target.value);

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3001/product/${id}`, {
      title: title,
      price: price,
    });
    history.push("/");
  };

  useEffect(() => {
    // getProductsById();
    const getProductsById = async () => {
      const response = await axios.get(`http://localhost:3001/product/${id}`);
      setTitle(response.data.title);
      setPrice(response.data.price);
    };
    getProductsById();
  }, []);

 

  return (
    <div className="mt-60">
      <div className="w-screen flex flex-col items-center justify-center">
        <div className="mb-6">
          <h1 className="text-gray-700 text-5xl mb-5">Add Items</h1>
        </div>
        <form
          className="w-full max-w-lg flex flex-col justify-center items-center"
          onSubmit={updateProduct}
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
            />
          </div>
          <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

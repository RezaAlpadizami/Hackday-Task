import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import CurrencyFormat from 'react-currency-format';


const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(`http://localhost:3001/product`);
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3001/product/${id}`);
    getProducts();
  }

 

  return (
    <div className="container mx-auto">
      <div className="flex justify-center pt-16 font-bold mb-8">
        <h3 className="text-4xl">List Belanja Nyonya</h3>
      </div>
      <Link
        to="/add"
        className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Items
      </Link>
      <table className="min-w-full border-collapse block md:table mt-16">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-center">
              No
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-center">
              Title
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-center">
              Price
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {products.map((product, index) => (
            <tr
              className="bg-white border border-grey-500 md:border-none block md:table-row"
              key={product.id}
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-center">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Number
                </span>
                {index + 1}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-center">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Title
                </span>
                {product.title}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-center">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Price
                </span>
                <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> {}
              </td>

              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-center">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Actions
                </span>
                <Link
                  to={`/edit/${product.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mx-3 text-center"
                >
                  Edit
                </Link>
                <button onClick={ () => deleteProduct(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded text-center">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

import React, { useState } from "react";
import "./Folder.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

const Folder = ({search, setSearch}) => {
  const [products, setProduct] = React.useState([]);

  React.useState(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);


  const shopData = async (e, title, thumbnail, price) => {
    console.log(e);
    const response = await axios.post(
      "https://65a658fd74cf4207b4efce45.mockapi.io/CRUD/SHop",
      { id: e, title: title, thumbnail: thumbnail, price: price }
    );
  };

  const LikeData = async (e, title, thumbnail, price) => {
    console.log(e);
    const response = await axios.post(
      "https://65a658fd74cf4207b4efce45.mockapi.io/CRUD/CRUD",
      { id: e, title: title, thumbnail: thumbnail, price: price }
    );
  };

  return (
    <div>
      <Header setSearch={setSearch} />
      <div className="contayner">
        {products.filter((item) => item.title.toLowerCase().includes(search)).
        map((product) => {
          return (
            <div key={product.id}>
              <div className="block">
                <Link className="well" to={`Link/${product.id}`}>
                  <img className="img_1" src={product.thumbnail} alt="" />
                </Link>
                <h2>{product.title}</h2>
                <div className="box-one">
                  <p className="p_1">{product.price} $</p>

                  <button
                    className="p_2"
                    onClick={() =>
                      shopData(
                        product.id,
                        product.title,
                        product.thumbnail,
                        product.price
                      )
                    }
                  >
                    <i className="bx bx-shopping-bag"></i>
                  </button>
                  <button
                    className="p_2"
                    onClick={() =>
                      LikeData(
                        product.id,
                        product.title,
                        product.thumbnail,
                        product.price
                      )
                    }
                  >
                    <i className="bx bxs-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folder;

import React, { useState, useEffect } from "react";
import "./Link.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Link = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const getProducts  = async () => {
       await fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }


  useEffect(() => {
    setIsLoading(true);
     getProducts()
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="wrapper_one">
        {isLoading ? (
          "loading ..."
        ) : (
          <div className="box_two">
            <div className="box_three">
              <img className="img_3" src={products.thumbnail} alt="" />
            </div>
            <div className="box_four">
              <h1>title: {products.title}</h1>
              <p>description: {products.description}</p>
              <h4>category: {products.category}</h4>
              <p>{products.price} $</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Link;

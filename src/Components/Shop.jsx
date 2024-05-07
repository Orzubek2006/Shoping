import React, { useEffect, useState } from 'react'
import './Shop.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shop = () => {
 const [data, setData] = useState([]);
 const [isLoading, setIsLoading] = useState(false);

// read data
 const getData = async () => {
  try {
    setIsLoading(true);
    const response = await axios
      .get("https://65a658fd74cf4207b4efce45.mockapi.io/CRUD/SHop")
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      });
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};


//   delete data
const deleteData = async (id) => {
  try {
    setIsLoading(true);
    await axios
      .delete(`https://65a658fd74cf4207b4efce45.mockapi.io/CRUD/SHop/${id}`)
      .then((data) => {
        setData(data.data);
      });
    await getData();
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  getData();
}, []);

  return (
    <div>
      <div className="shoping">
          {isLoading ? "loading ..." : data.length === 0 ? "empty data"  : data.map((item, index) => (         
            <div className="shop_one" key={item.id}>
              {/* <Link className="well" to={`Link/${item.id}`}> */}
               <img className='img_1' src={item.thumbnail} alt="" />
              {/* </Link> */}
              <h3 className='h3_1'>{item.title}</h3>
              <div className="shop_two">
                <p className='p_1'>{item.price} $</p>
                <button onClick={() => deleteData(item.id)}>delete</button>
              </div>
            </div>
          ))}
      </div>   
    </div>
  )
}

export default Shop
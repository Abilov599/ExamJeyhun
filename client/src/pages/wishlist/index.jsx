import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";

const Wishlist = () => {
  const data = useSelector((state) => state.wishlistSlice);
  console.log(data.data);
  return (
    <div className="wishlist">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
      <div className="container">
        <div className="card-holder">
          {data.data?.map((elem) => {
            return (
              <div key={elem._id} className="card">
                <h1>{elem.name}</h1>
                <i className="fa-regular fa-calendar-days"></i>
                <span>{elem.createdAt}</span>
                <hr />
                <br />
                <div>
                  <div>
                    <img src={`${elem.img}`} alt="" />
                  </div>
                  <div className="text">
                    <p>{elem.description}</p>
                    <Link to={`details/${elem._id}`}>Continue reading</Link>
                  </div>
                </div>
                <p className="price">Price : ${elem.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchDataById = async () => {
    const res = await axios(`http://localhost:3000/blogs/${id}`);
    return setData(res.data);
  };

  useEffect(() => {
    fetchDataById();
  }, []);

  console.log(data);

  return (
    <div className="details-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details</title>
      </Helmet>
      <div className="container">
        <div>
          <div>
            <img src={`${data?.img}`} alt="" />
          </div>
          <div className="detail-text">
            <h2>Name: {data?.name}</h2>
            <h2>Desc: {data?.description}</h2>
            <h2>Date: {data?.createdAt}</h2>
            <h2>Price: {data?.price}</h2>
            <Link to="/">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

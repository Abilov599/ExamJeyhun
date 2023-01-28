import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { deleteDataById, fetchData } from "../../redux/slice/dataSlice";
import { addWish, removeWish } from "../../redux/slice/wishlistSlice";
import "./index.scss";

const Home = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  const data = useSelector((state) => state.dataSlice);
  const wishlist = useSelector((state) => state.wishlistSlice);

  const disp = useDispatch();

  const [toggle, setToggle] = useState(true);

  const handleSort = () => {
    setToggle(!toggle);
    toggle ? disp(fetchData(1)) : disp(fetchData(""));
  };

  useEffect(() => {
    disp(fetchData());
  }, [disp]);

  return (
    <main id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <section className="carousel">
        <div>
          <Slider {...settings}>
            <div className="slide1">
              <div className="slide-text">
                <h3>Markup: HTML Tags and Formatting</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  saepe dicta repellat labore exercitationem accusamus cum
                  adipisci consectetur impedit aut?
                </p>
              </div>
            </div>
            <div className="slide2">
              <div className="slide-text">
                <h3>Markup: HTML Tags and Formatting</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  saepe dicta repellat labore exercitationem accusamus cum
                  adipisci consectetur impedit aut?
                </p>
              </div>
            </div>
            <div className="slide3">
              <div className="slide-text">
                <h3>Markup: HTML Tags and Formatting</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  saepe dicta repellat labore exercitationem accusamus cum
                  adipisci consectetur impedit aut?
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="text">
          <span>
            Do you like this awesome and free WordPress WooCommerce theme?
          </span>
          <button>Download Now</button>
        </div>
      </section>
      <section className="middle">
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
                      <button
                        onClick={() =>
                          disp(deleteDataById(elem._id)).then(() =>
                            disp(fetchData())
                          )
                        }
                      >
                        Delete
                      </button>
                      <br />
                      {wishlist.data.find((el) => el._id === elem._id) ? (
                        <button onClick={() => disp(removeWish(elem._id))}>
                          Remove
                        </button>
                      ) : (
                        <button onClick={() => disp(addWish(elem))}>Add</button>
                      )}
                    </div>
                  </div>
                  <p className="price">Price : ${elem.price}</p>
                </div>
              );
            })}
          </div>
          <div className="search-sort">
            <div>
              <input
                placeholder="Search..."
                onChange={(e) => disp(fetchData(e.target.value))}
                type="text"
              />
              <button onClick={() => handleSort()}>Sort</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./../../components/Carousel/Carousel.js";
import Feature from "./../../components/Feature/Feature.js";
import "./home.css";
import axios from "axios";

const Home = () => {

  const [listMostDiscount, setListMostDiscount] = useState([]);
  const [feature, setFeature] = useState({
    type: "",
    featureList: [],
  });

  useEffect(() => {
    fetchMostDiscount();
    fetchRecommend();
  }, []);

  const fetchMostDiscount = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/books/getTop10Discount");
    setListMostDiscount(res.data);
  };

  const fetchRecommend = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/books/getRecomended");
    setFeature({ ...feature, type: "recommended", featureList: res.data });
  };

  const fetchPopular = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/books/getPopular");
    setFeature({ ...feature, type: "popular", featureList: res.data });
  };

  return (
    <div className="home">
      <section className="container on-sale">
        <div className="on-sale-header">
          <h2 className="title">On Sale</h2>
          <Link to="/catalog" className="view-all btn">
            View All
          </Link>
        </div>

        <div className="on-sale-content">
          <Carousel list={listMostDiscount} />
        </div>
      </section>

      <section className="container feature">
        <div className="feature-header">
          <h2 className="title">Feature Books</h2>
          <div className="options">
            <button className={"btn recommended"} onClick={fetchRecommend}>
              Recommended
            </button>
            <button className={"btn popular"} onClick={fetchPopular}>
              Popular
            </button>
          </div>
        </div>

        <div className="feature-content">
          <Feature list={feature.featureList} />
        </div>
      </section>
    </div>
  );
};

export default Home;

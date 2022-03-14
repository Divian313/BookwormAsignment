import React from "react";
import "./carousel.css";
import { chunk } from "lodash";
import Card from "../Card/Card";
import classNames from "classnames";

function Carousel({ list }) {
  const listCarousel = chunk(list, 4); 

  const renderBookItem = (listBook) => {
    let xhtml = [];

    xhtml = listBook?.map((book) => {
      return (
        <div className="col-6 col-sm-3 product-list-item">
          <Card item={book} />
        </div>
      );
    });

    return xhtml;
  };

  return (
    <div className="slider">
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          {list.length
            ? listCarousel.map((carouselItem, index) => {
                return (
                  <div
                    className={classNames("carousel-item", {
                      active: index === 0,
                    })}
                  >
                    <div className="row">{renderBookItem(carouselItem)}</div>
                  </div>
                );
              })
            : null}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;

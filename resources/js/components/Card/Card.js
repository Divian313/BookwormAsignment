import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card({ item }) {
    const img =
        item.book_cover_photo !== null ? item.book_cover_photo : "bookDefault";

    return (
        <Link
            to={"/detail/" + item.id}
            className="card bwm-card"
            style={{ width: "100%" }}
        >
            <div className="wrapper-img">
                <img src={`/bookcover/${img}.jpg`} />
            </div>
            <div className="card-body">
                <div className="card-body-head">
                    <h5 className="card-title">{item.book_title}</h5>
                    <p className="card-text">{item.author_name}</p>
                </div>
                <div className="card-body-foot">
                    <div className="price">
                        {item.discount_price ? (
                            <>
                                <span className="current bwm-line-through">
                                    {item.book_price}<span>$</span>
                                </span>
                                <span className="discount">
                                    {item.discount_price}<span>$</span>
                                </span>
                            </>
                        ) : (
                            <span className="current">{item.book_price}$</span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;

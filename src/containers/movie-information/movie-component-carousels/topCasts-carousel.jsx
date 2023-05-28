import React from "react";
import "./topCasts-carousel.css";

export default function TopCastsCarousel(props) {
  return (
    <div className="topCasts-carousel">
      <div className="topCasts-carousel_img">
        <img src={props.img} alt="movie carousel img" />
      </div>
      <div className="topCasts-carousel_actions">
        <h4 className="topCasts-carousel_actions_fullName">{props.fullName}</h4>
        <h6 className="topCasts-carousel_actions_name">{props.name}</h6>
      </div>
    </div>
  );
}

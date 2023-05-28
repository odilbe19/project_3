import React from "react";
import "./hero_main_buttons.css";

export default function HeroMainBtn(props) {
  return (
    <div className="hero-main-btn">
      {props.img}
      <span>{props.name}</span>
    </div>
  );
}

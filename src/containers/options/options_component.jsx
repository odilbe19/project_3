import React from "react";
import "./options.css";

export default function OptionsComponent() {
  return (
    <div className="options_component">
      <ul className="options_component_ul">
        <li className="active">Episode</li>
        <li>Universe</li>
        <li>News</li>
        <li>Reviews</li>
      </ul>
    </div>
  );
}

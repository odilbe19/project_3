import React from "react";
import "./episodes-streamlist-item.css";

export default function EpisodesStreamlistItem(props) {
  return (
    <div className="episodes-streamlist-item-container">
      <div className="episodes-streamlist-item-component">
        <div className="episodes-streamlist-item-component-desc">
          <h4 className="episodes-streamlist-item-component-desc-title">
            {props.name}
          </h4>
          <h4 className="episodes-streamlist-item-component-desc-about">
            The chapter about geuinea just want to go out fromhis palace to get
            freedom...
          </h4>
        </div>
        <div className="episodes-streamlist-item-component-video">
          <h4>34 : 05</h4>
          <div className="episodes-streamlist-item-component-video-line">
            <span className="episodes-streamlist-item-component-video-line_span"></span>
          </div>
          <h4>00 : 57 : 45</h4>
        </div>
      </div>
    </div>
  );
}

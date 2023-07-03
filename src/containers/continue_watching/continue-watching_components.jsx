import React from "react";
import "./continue-watching_components.css";

export default function ContinueWatchingComponents({data}) {
  return (
    <div className="continue-watching_components">
      <h1>Continue Watching</h1>
      <div  className="continue-watching_components_streamlist">
        {
          data.map(item =>{
            return(
              <div key={item.id} className="continue-watching_components_streamlist_item">
          <div className="continue-watching_components_streamlist_item_desc_container">
            <div className="continue-watching_components_streamlist_item_desc_component">
              <h3>{item.title}</h3>
              <p>{item.year}</p>
              <div className="continue-watching_components_streamlist_item_desc_component_block">
                <span>{item.timeOfStop}</span>
                <span>
                  <span className="green"></span>
                </span>
                <span>{item.lengthOfFilm}</span>
              </div>
            </div>
          </div>
        </div>
            )
          })
        }
      </div>
    </div>
  );
}

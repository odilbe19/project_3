import React from "react";
import "./your_watchlist_component.css";
import img1 from '../../assets/images/Image (10).png'
import img2 from '../../assets/images/Image (11).png'
import img3 from '../../assets/images/Image (12).png'
import img4 from '../../assets/images/Image (13).png'
import img5 from '../../assets/images/Image (14).png'

const iconStart = (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7891 3.62247L12.1091 6.26247C12.2891 6.62997 12.7691 6.98247 13.1741 7.04997L15.5666 7.44747C17.0966 7.70247 17.4566 8.81247 16.3541 9.90747L14.4941 11.7675C14.1791 12.0825 14.0066 12.69 14.1041 13.125L14.6366 15.4275C15.0566 17.25 14.0891 17.955 12.4766 17.0025L10.2341 15.675C9.82913 15.435 9.16163 15.435 8.74913 15.675L6.50663 17.0025C4.90163 17.955 3.92663 17.2425 4.34663 15.4275L4.87913 13.125C4.97663 12.69 4.80413 12.0825 4.48913 11.7675L2.62913 9.90747C1.53413 8.81247 1.88663 7.70247 3.41663 7.44747L5.80913 7.04997C6.20663 6.98247 6.68663 6.62997 6.86663 6.26247L8.18663 3.62247C8.90663 2.18997 10.0766 2.18997 10.7891 3.62247Z"
      fill="#FFCD1A"
    />
  </svg>
);

export default function YourWatchlistComponent(props) {
  return (
    <div className="your_watchlist_component">
      <h1 className="your_watchlist_component_title_h1">{props.title}</h1>
      <div className="your_watchlist_component_list">
        <div className="your_watchlist_component_list_item">
          <img src={img1} alt="photo" />
          <h3 className="your_watchlist_component_list_item_title">TOP GUN:Maverick</h3>
          <div className="popular_components_movielist_item_title_desc_stars">
            <span>{iconStart}</span> <h3>4.3</h3> <h4>| Horror • Movie</h4>
          </div>
        </div>
        <div className="your_watchlist_component_list_item">
          <img src={img2} alt="photo" />
          <h3 className="your_watchlist_component_list_item_title">Spiderman; into the spider verse</h3>
          <div className="popular_components_movielist_item_title_desc_stars">
            <span>{iconStart}</span> <h3>4.3</h3> <h4>| Horror • Movie</h4>
          </div>
        </div>
        <div className="your_watchlist_component_list_item">
          <img src={img3} alt="photo" />
          <h3 className="your_watchlist_component_list_item_title">Black Panther; Wakanda Forever</h3>
          <div className="popular_components_movielist_item_title_desc_stars">
            <span>{iconStart}</span> <h3>4.3</h3> <h4>| Horror • Movie</h4>
          </div>
        </div>
        <div className="your_watchlist_component_list_item">
          <img src={img4} alt="photo" />
          <h3 className="your_watchlist_component_list_item_title">Batman V Superman</h3>
          <div className="popular_components_movielist_item_title_desc_stars">
            <span>{iconStart}</span> <h3>4.3</h3> <h4>| Horror • Movie</h4>
          </div>
        </div>
        <div className="your_watchlist_component_list_item">
          <img src={img5} alt="photo" />
          <h3 className="your_watchlist_component_list_item_title">Red Notice</h3>
          <div className="popular_components_movielist_item_title_desc_stars">
            <span>{iconStart}</span> <h3>4.3</h3> <h4>| Horror • Movie</h4>
          </div>
        </div>
      </div>  
    </div>
  );
}

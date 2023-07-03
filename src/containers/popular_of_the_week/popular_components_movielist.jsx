import React from "react";
import "./popular_components_movielist.css";
import movielist1 from '../../assets/images/Image (1).png'
import movielist2 from '../../assets/images/Image (2).png'
import movielist3 from '../../assets/images/Image (3).png'
import movielist4 from '../../assets/images/Image (4).png'

const iconHerrorFilm = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_552)">
      <path
        d="M12.6648 2.99005H4.31812C3.83366 2.99005 3.36904 3.1825 3.02647 3.52507C2.68391 3.86764 2.49146 4.33226 2.49146 4.81672V13.1634C2.49146 13.6478 2.68391 14.1125 3.02647 14.455C3.36904 14.7976 3.83366 14.9901 4.31812 14.9901H12.6648C13.1493 14.9901 13.6139 14.7976 13.9564 14.455C14.299 14.1125 14.4915 13.6478 14.4915 13.1634V4.81672C14.4915 4.33226 14.299 3.86764 13.9564 3.52507C13.6139 3.1825 13.1493 2.99005 12.6648 2.99005ZM5.15812 8.32338H3.82479V6.99005H5.15812V8.32338ZM3.82479 9.65672H5.15812V10.9901H3.82479V9.65672ZM13.1581 8.32338H11.8248V6.99005H13.1581V8.32338ZM11.8248 9.65672H13.1581V10.9901H11.8248V9.65672ZM13.1581 4.81672V5.65672H11.8248V4.32338H12.6648C12.7296 4.32338 12.7937 4.33615 12.8536 4.36094C12.9134 4.38573 12.9678 4.42207 13.0136 4.46788C13.0594 4.51369 13.0958 4.56807 13.1206 4.62793C13.1454 4.68778 13.1581 4.75193 13.1581 4.81672ZM4.31812 4.32338H5.15812V5.65672H3.82479V4.81672C3.82479 4.75193 3.83755 4.68778 3.86234 4.62793C3.88713 4.56807 3.92347 4.51369 3.96928 4.46788C4.01509 4.42207 4.06948 4.38573 4.12933 4.36094C4.18919 4.33615 4.25334 4.32338 4.31812 4.32338ZM3.82479 13.1634V12.3234H5.15812V13.6567H4.31812C4.25334 13.6567 4.18919 13.644 4.12933 13.6192C4.06948 13.5944 4.01509 13.558 3.96928 13.5122C3.92347 13.4664 3.88713 13.412 3.86234 13.3522C3.83755 13.2923 3.82479 13.2282 3.82479 13.1634ZM13.1581 13.1634C13.1581 13.2942 13.1061 13.4197 13.0136 13.5122C12.9211 13.6047 12.7956 13.6567 12.6648 13.6567H11.8248V12.3234H13.1581V13.1634Z"
        fill="#78828A"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_552">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.491455 0.990051)"
        />
      </clipPath>
    </defs>
  </svg>
);

const iconStart = <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.7891 3.62247L12.1091 6.26247C12.2891 6.62997 12.7691 6.98247 13.1741 7.04997L15.5666 7.44747C17.0966 7.70247 17.4566 8.81247 16.3541 9.90747L14.4941 11.7675C14.1791 12.0825 14.0066 12.69 14.1041 13.125L14.6366 15.4275C15.0566 17.25 14.0891 17.955 12.4766 17.0025L10.2341 15.675C9.82913 15.435 9.16163 15.435 8.74913 15.675L6.50663 17.0025C4.90163 17.955 3.92663 17.2425 4.34663 15.4275L4.87913 13.125C4.97663 12.69 4.80413 12.0825 4.48913 11.7675L2.62913 9.90747C1.53413 8.81247 1.88663 7.70247 3.41663 7.44747L5.80913 7.04997C6.20663 6.98247 6.68663 6.62997 6.86663 6.26247L8.18663 3.62247C8.90663 2.18997 10.0766 2.18997 10.7891 3.62247Z" fill="#FFCD1A" />
</svg>


export default function PopularComponentsMovielist({ data }) {
  return (
    <div className="popular_components_movielist">
      {
        data.map(item => {
          return (
            <div key={item.id} className="popular_components_movielist_item">
              <h1 className="popular_components_movielist_item_h1">{item.id}</h1>
              <div className="popular_components_movielist_item_img">
                <img src={item.img_url} alt="photo" />
              </div>
              <div className="popular_components_movielist_item_title_desc">
                <div className="popular_components_movielist_item_title_desc_btn">
                  <p className="popular_components_movielist_item_title_desc_btn_p">PG-13</p>
                </div>
                <h3 className="popular_components_movielist_item_title_desc_h3">{item.title}</h3>
                <div className="popular_components_movielist_item_title_desc_films"> <span>{iconHerrorFilm}</span> <p>{item.type}</p></div>
                <div className="popular_components_movielist_item_title_desc_stars"><span>{iconStart}</span> <h3>{item.stars}</h3> <h4>| Movie</h4> </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

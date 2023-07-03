import React from "react";
import "./explore_component.css";

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

const iconPlay = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.6 12C20.6 16.7496 16.7497 20.6 12 20.6C7.25038 20.6 3.40002 16.7496 3.40002 12C3.40002 7.25035 7.25038 3.39999 12 3.39999C16.7497 3.39999 20.6 7.25035 20.6 12ZM12.0204 7.76948C11.3453 7.31943 10.4773 7.27747 9.76194 7.66031C9.04659 8.04315 8.60002 8.78865 8.60002 9.6V14.4C8.60002 15.2113 9.04659 15.9568 9.76194 16.3397C10.4773 16.7225 11.3453 16.6806 12.0204 16.2305L15.6204 13.8305C16.2324 13.4225 16.6 12.7356 16.6 12C16.6 11.2644 16.2324 10.5775 15.6204 10.1695L12.0204 7.76948Z"
      fill="white"
      stroke="white"
      stroke-width="2"
    />
  </svg>
);

const iconAdd = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const iconArrowLeft = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="16" fill="#28262D"/>
    <path
      d="M19.344 8.77669C19.5023 8.77669 19.6607 8.83503 19.7857 8.96003C20.0273 9.20169 20.0273 9.60169 19.7857 9.84336L14.3523 15.2767C13.9523 15.6767 13.9523 16.3267 14.3523 16.7267L19.7857 22.16C20.0273 22.4017 20.0273 22.8017 19.7857 23.0434C19.544 23.285 19.144 23.285 18.9023 23.0434L13.469 17.61C13.044 17.185 12.8023 16.61 12.8023 16.0017C12.8023 15.3934 13.0357 14.8184 13.469 14.3934L18.9023 8.96003C19.0273 8.84336 19.1857 8.77669 19.344 8.77669Z"
      fill="#F9F9F9"
    />
  </svg>
);

const iconArrowRight = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="16" fill="#28262D" />
    <path
      d="M13.425 23.225C13.2667 23.225 13.1084 23.1667 12.9834 23.0417C12.7417 22.8 12.7417 22.4 12.9834 22.1583L18.4167 16.725C18.8167 16.325 18.8167 15.675 18.4167 15.275L12.9834 9.84168C12.7417 9.60002 12.7417 9.20002 12.9834 8.95835C13.225 8.71668 13.625 8.71668 13.8667 8.95835L19.3 14.3917C19.725 14.8167 19.9667 15.3917 19.9667 16C19.9667 16.6083 19.7334 17.1833 19.3 17.6083L13.8667 23.0417C13.7417 23.1583 13.5834 23.225 13.425 23.225Z"
      fill="#F9F9F9"
    />
  </svg>
);

export default function ExploreComponent() {
  return (
    <div className="explore_component">
      <div className="explore_component_movie_details">
        <div className="explore_component_movie_details_btn">
          <p>Explore by the genre</p>
        </div>
        <h1 className="explore_component_movie_details_title">
          Guardian Of The <br /> Galaxy; Volume 3
        </h1>
        <div className="popular_components_movielist_item_title_desc_stars">
          <span>{iconStart}</span> <h3>4.3</h3>{" "}
          <h4 className="explore_component_star_title">
            | 2h40m • 2022 • Superhero • Actions
          </h4>
        </div>

        <div className="movie-info_components_left_buttons explore_component_btn_group ">
          <div className="movie-info_components_left_buttons_button">
            <span>{iconPlay}</span>
            <p>Play Now</p>
          </div>
          <div className="movie-info_components_left_buttons_button">
            <span>{iconAdd}</span>
            <p>Add Watchlist</p>
          </div>
        </div>
        <div className="explore_component_movie_details_arrows">
          <span> {iconArrowLeft}</span>
          <span>{iconArrowRight}</span>
        </div>
      </div>
      <div className="explore_component_carousel">
        <div className="explore_component_carousel_item">
            <p>Superhero </p>
        </div>
        <div className="explore_component_carousel_item">
            <p>Drama </p>
        </div>
        <div className="explore_component_carousel_item">
            <p>Sitcom </p>
        </div>
        <div className="explore_component_carousel_item">
            <p>Thriller </p>
        </div>
        <div className="explore_component_carousel_item">
            <p>Comedy </p>
        </div>
        <div className="explore_component_carousel_item">
            <p>Fantasy </p>
        </div>
      </div>
    </div>
  );
}

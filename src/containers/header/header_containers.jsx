import React from "react";
import "./header_containers.css";
import HeaderNavbarContainer from "./header-navbar_container";
import MovieInfoContainers from "./movie-info_containers";

export default function HeaderContainers() {
  return (
    <div className="header_containers">
      <HeaderNavbarContainer />
      <MovieInfoContainers />
    </div>
  );
}

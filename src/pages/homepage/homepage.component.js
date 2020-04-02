import React from "react";
import "./homepage.styles.scss";
import "../../components/directory/directory.components";
import Directory from "../../components/directory/directory.components";

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;

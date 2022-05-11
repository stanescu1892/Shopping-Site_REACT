import React from "react";
import "./Homepage.scss";
import Directory from "../../components/directory/Directory";
import SocialFollow from "../../components/SocialMediaIcons/SocialMediaIcons";

function Homepage() {
  return (
    <div className="homepage">
      <Directory />
      <SocialFollow />
    </div>
  );
}

export default Homepage;

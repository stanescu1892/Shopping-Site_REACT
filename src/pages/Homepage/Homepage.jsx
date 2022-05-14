import React from "react";
import Directory from "../../components/directory/Directory";
import SocialFollow from "../../components/SocialMediaIcons/SocialMediaIcons";
import "./Homepage.scss";


function Homepage() {
  return (
    <div className="homepage">
      <Directory />
      <SocialFollow />
    </div>
  );
}

export default Homepage;

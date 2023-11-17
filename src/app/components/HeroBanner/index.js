import React from "react";
import InvitationSidebar from "../InvitationSideBar";
import Date from "../Date";
import "./style.css";
function HeroBanner() {
  return (
    <div className="hero-banner">
      <img src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1700176986/Aqdh-878_s3pdcy.jpg" />
      <InvitationSidebar />
      <Date />
    </div>
  );
}

export default HeroBanner;

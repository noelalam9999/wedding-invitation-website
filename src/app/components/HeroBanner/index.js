import React from "react";
import InvitationSidebar from "../InvitationSideBar";
import Date from "../Date";
import "./style.css";
import HeroTitle from "../HeroTitle";
function HeroBanner() {
  return (
    <div className="hero-banner">
      <img src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1700284627/Aqdh-878_izt3z3.jpg" />
      <HeroTitle />
      <InvitationSidebar />
      <Date />
    </div>
  );
}

export default HeroBanner;

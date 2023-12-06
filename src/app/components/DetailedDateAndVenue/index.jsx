import React from "react";
import MapComponent from "../Map";
import "./style.css";
function DetailedDateAndVenue() {
  return (
    <div className="detailed-date-and-venue">
      <div className="venue-info">
        <div className="ceremony-title">
          <span>
            WEDDING
            <br />
            CEREMONY
          </span>
        </div>
        <div className="detailed-date-time-venue">
          <div className="detailed-date-time">
            DECEMBER 27th,&nbsp; 2024
            <br />
            8:00PM - 11:00PM
          </div>
          <div className="venue">
            <div className="title">Aman Ullah Convention Center,</div>
            <div className="address">
              Arambag Point, M C College Rd, Sylhet 3100
            </div>
          </div>
        </div>
      </div>
      <MapComponent />
    </div>
  );
}

export default DetailedDateAndVenue;

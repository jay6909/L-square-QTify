import React from "react";
// import { ReactComponent as VibratingHeadphoneLogo } from "./vibrating-headphone.svg";
import "./herosection.css";
export default () => {
  return (
    <div className="hs-container">
      <div className="hs-content">
        <div>
          <h1>
            100 Thousand Songs, ad-free <br />
            Over thousands podcast episodes
          </h1>
        </div>
      </div>
      {/* <VibratingHeadphoneLogo/> */}
      <div className="hs-img-frame">
        <img className="hs-image" src="./vibrating-headphone.svg"></img>
      </div>
    </div>
  );
};

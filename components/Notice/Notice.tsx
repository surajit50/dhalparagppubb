import React from "react";

const Notice = () => {
  return (
    <div className="h-[350px] overflow-hidden p-4 mb-2 mx-1 shadow-sm flex-1 bg-white">
      <div className="w-full border-2 border-[#cfcfcf] pb-[10px] m-0 mb-[15px] pt-[15px]  bg-[#00aed9] text-white">
        <h3 className="head-title">Notice Board</h3>
      </div>
      <ul className="notice-board-list flex-grow">
        <li>
          <img src="images/notice-board-img.png" /> Participation in Climate
          Correction Day (CCD) Challenge for Mission LiFE{" "}
        </li>
        <li>
          <img src="images/notice-board-img.png" /> West Zone Inter University
          Table Teniss (man) Tournament 2022-23{" "}
        </li>
        <li>
          <img src="images/notice-board-img.png" /> PhD Registration Form for
          Selected Candidates{" "}
        </li>
        <li>
          <img src="images/notice-board-img.png" /> List of Activities organised
          under TEQIP-III{" "}
        </li>
        <li>
          <img src="images/notice-board-img.png" /> Documents for empanellment
          of vendor for A className contyractor{" "}
        </li>
        <li>
          <img src="images/notice-board-img.png" /> School of Architecture
          College Level counselling 2022-23{" "}
        </li>
      </ul>
    </div>
  );
};

export default Notice;

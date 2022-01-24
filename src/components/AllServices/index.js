import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const AllServices = () => {
  return (
    <div className="container">
      <div className="services">
        <h3 className="subtitle">services we can help you with </h3>

        <div className="service">
          <div className="images">
            <Link to="/myservice">
         
  <h3 className="sertitle">House Cleaning Services</h3>
              <img  className="imgs"
                src="https://www.mollymaid.com/assets/content/content-b-img.2008121658469.jpg"
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="cover"
                alt="no img"
              />
            </Link>

            <Link to="/business">
              <h3 className="sertitle">Home Design Services</h3>
              <img  className="imgs"
                src="https://www.thekikoowebradio.com/wp-content/uploads/2019/07/images3601-5d374557a57df.jpg"
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="cover"
                alt="no img"
              />
            </Link>

            
            <Link to="/business">
              <h3 className="sertitle">Beauty Services</h3>
              <img className="imgs"
                src="https://restobod.com/wp-content/uploads/2019/07/shutterstock_615581297-1024x683.jpg"
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="cover"
                alt="no img"
              />
            </Link>

            <Link to="/business">
              <h3 className="sertitle">Transportation Services</h3>
              <img  className="imgs"
                src="https://cdn.aarp.net/content/dam/aarp/auto/2020/01/1140-young-male-driver.jpg"
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="cover"
                alt="no img"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;

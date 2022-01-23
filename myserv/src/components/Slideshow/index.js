import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import './style.css'




const slideImages = [
  {
    url: 'https://www.thekikoowebradio.com/wp-content/uploads/2019/07/images3601-5d374557a57df.jpg',
    caption: 'Home Design Services'
  },
  {
    url: 'https://www.mollymaid.com/assets/content/content-b-img.2008121658469.jpg',
    caption: ' House Cleaning Services'
   
  },
  {
    url: 'https://restobod.com/wp-content/uploads/2019/07/shutterstock_615581297-1024x683.jpg',
    caption: 'Beauty Services'
  },

  {
    url: 'https://cdn.aarp.net/content/dam/aarp/auto/2020/01/1140-young-male-driver.jpg',
    caption: 'Transportation Services'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span >{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;
import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import './style.css'




const slideImages = [
  {
    url: 'https://www.thekikoowebradio.com/wp-content/uploads/2019/07/images3601-5d374557a57df.jpg',
    caption: 'Stunning homes are always custom designed by licensed architects. They are the unique creations of men and women with skill and know-how. What if your dreams were more modest? Should you find an architect?'
  },
  {
    url: 'https://www.mollymaid.com/assets/content/content-b-img.2008121658469.jpg',
    caption: 'Do you have an upcoming family event? Or maybe you expect friends to stay out of town and visit them? You can find a house cleaning company in the area..'
    
  },
  {
    url: 'https://restobod.com/wp-content/uploads/2019/07/shutterstock_615581297-1024x683.jpg',
    caption: ' discover the best home salon services to enjoy in the comfort of your own home - wherever you can find home salon services?'
  },

  {
    url: 'https://cdn.aarp.net/content/dam/aarp/auto/2020/01/1140-young-male-driver.jpg',
    caption: 'Discover many drivers, parcel and order delivery services, school and university delivery... You can find them here..'
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
// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import { slieGuitar1 } from "../assets/images";
// import { slieGuitar2 } from "../assets/images";
// import { slieGuitar3 } from "../assets/images";

// const Slid = () => {
//     const images = [
//         slieGuitar1,
//         slieGuitar2,
//         slieGuitar3,
//     ];

//     return (
//         <Slide>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[0]})` }}>
//                     {/* <span>Slide 1</span> */}
//                 </div>
//             </div>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[1]})` }}>
//                 {/* <span>Slide 2</span> */}
//                 </div>
//             </div>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[2]})` }}>
//                     {/* <span>Slide 3</span> */}
//                 </div>
//             </div>
//         </Slide>
//     );
// };

// export default Slid;


import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slieGuitar1 } from "../assets/images";
import { slieGuitar2 } from "../assets/images";
import { slieGuitar3 } from "../assets/images";

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: slieGuitar1,
    caption: ''
  },
  {
    url: slieGuitar2,
    caption: ''
  },
  {
    url: slieGuitar3,
    caption: ''
  },
];

const Slid = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slid;
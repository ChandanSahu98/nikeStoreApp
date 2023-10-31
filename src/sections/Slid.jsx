// import React, { useState } from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import slieGuitar1 from './assets/images/slieGuitar1.jpg';
// import slieGuitar2 from './assets/images/slieGuitar2.jpg';
// import slieGuitar3 from './assets/images/slieGuitar3.jpg';

// const Slid = () => {
//     const [slieGuigar1, setSlieGuitar1] = useState(slieGuitar1);
//     const [slieGuigar2, setSlieGuitar2] = useState(slieGuitar2);
//     const [slieGuigar3, setSlieGuitar3] = useState(slieGuitar3);
    
//     const images = [
//         slieGuigar1,
//         slieGuigar2,
//         slieGuigar3
//     ];

//     return (
//         <div className="slide-container">
//             <Slide>
//                 {images.map((image, index) => (
//                     <div key={index} className="each-slide">
//                         <div style={{ 'backgroundImage': `url(${image})` }}>
//                             <span>{`Slide ${index + 1}`}</span>
//                         </div>
//                     </div>
//                 ))}
//             </Slide>
//         </div>
//     );
// };

// export default Slid;
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slid.css'
import { slieGuitar1 } from "../assets/images";
import { slieGuitar2 } from "../assets/images";
import { slieGuitar3 } from "../assets/images";

const Slid = () => {
    const images = [
        slieGuitar1,
        slieGuitar2,
        slieGuitar3,
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    {/* <span>Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
        </Slide>
    );
};

export default Slid;
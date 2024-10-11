import React from 'react';

const PortfolioImages = ({ imageURL1, imageURL2, imageURL3, firstName, lastName }) => {
  return (
    // <div className="slider fs">
      <div className="slides">
        <div className="slide dark">
          <div className="bg faded" style={{ backgroundImage: `url(${imageURL1})` }}></div>
          <div className="vbottom fs">
            <section>
              <h3>{firstName} {lastName}</h3>
            </section>
          </div>
        </div>
        <div className="slide dark">
          <div className="bg faded" style={{ backgroundImage: `url(${imageURL2})` }}></div>
          <div className="vbottom fs">
            <section>
              <h3>{firstName} {lastName}</h3>
            </section>
          </div>
        </div>
        <div className="slide dark">
          <div className="bg faded" style={{ backgroundImage: `url(${imageURL3})` }}></div>
          <div className="vbottom fs">
            <section>
              <h3>{firstName} {lastName}</h3>
            </section>
          </div>
        </div>
      </div>
  );
};

export default PortfolioImages;



// 'use client'

// import { useEffect, useState } from 'react';

// const PortfolioImages = () => {
//     const [imageData, setImageData] = useState<any>(null);
//     const [imageURL1, setImageURL1] = useState('');
//     const [imageURL2, setImageURL2] = useState('');
//     const [imageURL3, setImageURL3] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/demo.json');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 // Extract the URLs of photographer images thumbnails
//                 const imageUrl1 = data.docs[0]?.photographer_image_1?.sizes?.thumbnail?.url || '';
//                 const imageUrl2 = data.docs[0]?.photographer_image_2?.sizes?.thumbnail?.url || '';
//                 const imageUrl3 = data.docs[0]?.photographer_image_3?.sizes?.thumbnail?.url || '';
//                 setImageURL1(imageUrl1);
//                 setImageURL2(imageUrl2);
//                 setImageURL3(imageUrl3);
//                 setImageData(data.docs[0]);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <>
//             {imageData && (
//                 <>
//                     <div className="slide dark">
//                         <div className='bg faded' style={{ backgroundImage: `url(${imageURL1})` }}></div>
//                         <div className="vbottom fs">
//                             <section>
//                                 <h3>{imageData.first_name} {imageData.last_name}</h3>
//                             </section>
//                         </div>
//                     </div>

//                     <div className="slide dark">
//                         <div className='bg faded' style={{ backgroundImage: `url(${imageURL2})` }}></div>
//                         <div className="vbottom fs">
//                             <section>
//                                 <h3>{imageData.first_name} {imageData.last_name}</h3>
//                             </section>
//                         </div>
//                     </div>

//                     <div className="slide dark">
//                         <div className='bg faded' style={{ backgroundImage: `url(${imageURL3})` }}></div>
//                         <div className="vbottom fs">
//                             <section>
//                                 <h3>{imageData.first_name} {imageData.last_name}</h3>
//                             </section>
//                         </div>
//                     </div>
//                 </>
//             )}

//         </>
//     );
// }

// export default PortfolioImages;

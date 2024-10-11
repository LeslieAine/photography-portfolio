// 'use client'

// import { useEffect, useState } from 'react';

// const AboutImages = () => {
//     const [imageURL, setImageURL] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/demo.json');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 // Extract the URL of photographer_image_1 thumbnail
//                 const imageUrl = data.docs[0]?.photographer_image_1?.sizes?.thumbnail?.url || '';
//                 setImageURL(imageUrl);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <>
//                 {imageURL && (
//                     <img
//                         src={imageURL}
//                         alt="Profile"
//                         width={400}
//                         height={300}
//                     />
//                 )}

//         </>
//     );
// }

// export default AboutImages;

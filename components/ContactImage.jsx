// 'use client';

// import { useEffect, useState } from 'react';

// const  ContactImage = () => {
//   const [imageURL, setImageURL] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/demo.json');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         const imageUrl = data.docs[0]?.photographer_image_2?.sizes?.thumbnail?.url || '';
//         setImageURL(imageUrl);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className='bg faded-more' style={{ backgroundImage: `url(${imageURL})` }}></div>
//   );
// };

// export default ContactImage;

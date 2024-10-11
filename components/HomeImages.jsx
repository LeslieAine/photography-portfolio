// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

// type HomePageProps = {
//   imageURL1: string;
//   imageURL2: string;
//   imageURL3: string;

// };

// export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
//   try {
//     // Fetch data from external API
//     const res = await fetch('http://localhost:3000/demo.json');
//     const data = await res.json();

//     // Extract image URLs from the fetched data
//     const imageURL1 = data.docs[0].photographer_image_1.sizes.thumbnail.url;
//     const imageURL2 = data.docs[0].photographer_image_2.sizes.thumbnail.url;
//     const imageURL3 = data.docs[0].photographer_image_3.sizes.thumbnail.url;

//     // Return props
//     return { props: { imageURL1, imageURL2, imageURL3 } };
//   } catch (error) {
//     // Handle errors here
//     console.error('Error fetching data:', error);
//     // Return null or handle error appropriately
//     return { props: { imageURL1: null, imageURL2: null, imageURL3: null } };
//   }
// };



// const HomeImages = ({
//   imageURL1, imageURL2, imageURL3,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   return (
//     <>
//       <div className="img-grid">
//         <div className="item-sizer"></div>
//         <a href={imageURL1} data-caption="Photographer Image 1" className="item lightbox">
//           <img
//             src={imageURL1}
//             alt="Photographer Image 1"
//             width={400}
//             height={300}
//           />
//         </a>
//         <a href={imageURL2} data-caption="Photographer Image 2" className="item lightbox">
//           <img
//             src={imageURL2}
//             alt="Photographer Image 2"
//             width={400}
//             height={300}
//           />
//         </a>
//         <a href={imageURL3} data-caption="Photographer Image 3" className="item lightbox">
//           <img
//             src={imageURL3}
//             alt="Photographer Image 3"
//             width={400}
//             height={300}
//           />
//         </a>
//       </div>
//     </>
//   );
// };

// // const HomeImages = ({ initialData }: { initialData: any }) => {
// //   const [imageData, setImageData] = useState(initialData);

// //   useEffect(() => {
// //     // Only run this effect if initialData is null (client-side fetch)
// //     if (!initialData) {
// //       const fetchData = async () => {
// //         try {
// //           const response = await fetch('/demo.json');
// //           if (!response.ok) {
// //             throw new Error('Failed to fetch data');
// //           }
// //           const data = await response.json();
// //           setImageData(data.docs[0]);
// //         } catch (error) {
// //           console.error('Error fetching data:', error);
// //         }
// //       };
// //       fetchData();
// //     }
// //   }, [initialData]);

// //   if (!imageData) {
// //     return <div>Loading...</div>; // Or any loading spinner
// //   }

// //   // useEffect(() => {
// //   //   if (!initialData) {
// //   //     const fetchData = async () => {
// //   //       try {
// //   //         const response = await fetch('/demo.json');
// //   //         if (!response.ok) {
// //   //           throw new Error('Failed to fetch data');
// //   //         }
// //   //         const data = await response.json();
// //   //         setImageData(data.docs[0]);
// //   //       } catch (error) {
// //   //         console.error('Error fetching data:', error);
// //   //       }
// //   //     };

// //   //     fetchData();
// //   //   }
// //   // }, [initialData]);

// //   return (
// //     <div className="img-grid">
// //       {imageData && (
// //         <>
// //           <div className="item-sizer"></div>
// //           <a href={imageData.photographer_image_1.sizes.thumbnail.url} data-caption="Photographer Image 1" className="item lightbox">
// //             <img
// //               src={imageData.photographer_image_1.sizes.thumbnail.url}
// //               alt="Photographer Image 1"
// //               width={imageData.photographer_image_1.sizes.thumbnail.width}
// //               height={imageData.photographer_image_1.sizes.thumbnail.height}
// //             />
// //           </a>
// //           <a href={imageData.photographer_image_2.sizes.thumbnail.url} data-caption="Photographer Image 2" className="item lightbox">
// //             <img
// //               src={imageData.photographer_image_2.sizes.thumbnail.url}
// //               alt="Photographer Image 2"
// //               width={imageData.photographer_image_2.sizes.thumbnail.width}
// //               height={imageData.photographer_image_2.sizes.thumbnail.height}
// //             />
// //           </a>
// //           <a href={imageData.photographer_image_3.sizes.thumbnail.url} data-caption="Photographer Image 3" className="item lightbox">
// //             <img
// //               src={imageData.photographer_image_3.sizes.thumbnail.url}
// //               alt="Photographer Image 3"
// //               width={imageData.photographer_image_3.sizes.thumbnail.width}
// //               height={imageData.photographer_image_3.sizes.thumbnail.height}
// //             />
// //           </a>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// export default HomeImages;




// // 'use client'

// // import { useEffect, useState } from 'react';

// // const HomeImages = () => {
// //   const [imageData, setImageData] = useState<any>(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('/demo.json');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch data');
// //         }
// //         const data = await response.json();
// //         setImageData(data.docs[0]);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <>
// //       <div className="img-grid">
// //         {imageData && (
// //           <>
// //             <div className="item-sizer"></div>
// //             <a href={imageData.photographer_image_1.sizes.thumbnail.url} data-caption="Photographer Image 1" className="item lightbox">
// //               <img
// //                 src={imageData.photographer_image_1.sizes.thumbnail.url}
// //                 alt="Photographer Image 1"
// //                 width={imageData.photographer_image_1.sizes.thumbnail.width}
// //                 height={imageData.photographer_image_1.sizes.thumbnail.height}
// //               />
// //             </a>
// //             <a href={imageData.photographer_image_2.sizes.thumbnail.url} data-caption="Photographer Image 2" className="item lightbox">
// //               <img
// //                 src={imageData.photographer_image_2.sizes.thumbnail.url}
// //                 alt="Photographer Image 2"
// //                 width={imageData.photographer_image_2.sizes.thumbnail.width}
// //                 height={imageData.photographer_image_2.sizes.thumbnail.height}
// //               />
// //             </a>
// //             <a href={imageData.photographer_image_3.sizes.thumbnail.url} data-caption="Photographer Image 3" className="item lightbox">
// //               <img
// //                 src={imageData.photographer_image_3.sizes.thumbnail.url}
// //                 alt="Photographer Image 3"
// //                 width={imageData.photographer_image_3.sizes.thumbnail.width}
// //                 height={imageData.photographer_image_3.sizes.thumbnail.height}
// //               />
// //             </a>
// //           </>
// //         )}
// //       </div>
// //     </>
// //   );
// // }

// // export default HomeImages;

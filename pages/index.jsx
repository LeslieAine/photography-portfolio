/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import Layout from '../components/Layout';
import axios from 'axios';
// import data from '../lib/data.json'; 

const Landing = ({ firstName,
  lastName,
  email,
  businessName,
  imageURL1,
  imageURL2,
  imageURL3 }) => {

  return (
    <>
        <Layout
          firstName={firstName}
          lastName={lastName}
          email={email}
          businessName={businessName}
          imageURL1={imageURL1}
          imageURL2={imageURL2}
          imageURL3={imageURL3}
        />
    </>
  )
}

export const getServerSideProps = async () => {

  try {
    const fetchBusinessData = async () => {
      try {
        const response = await axios.get(
          'https://myphotosite-portfolio.netlify.app/demo.json'
        );
        // console.log('Data fetched:', response.data);
        return response.data.docs[0];
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Error fetching data');
      }
    };

    const demoData = await fetchBusinessData();
    // const leadType = demoData.lead_type;
    const firstName = demoData.first_name;
    const lastName = demoData.last_name;
    const businessName = demoData.business_name;
    const email = demoData.email;
    const imageURL1 = demoData.photographer_image_1;
    const imageURL2 = demoData.photographer_image_2;
    const imageURL3 = demoData.photographer_image_3;

    return {
      props: {
        firstName,
        lastName,
        email,
        businessName,
        imageURL1,
        imageURL2,
        imageURL3
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Landing;
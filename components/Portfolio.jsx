import React from 'react';
import PortfolioImages from './PortfolioImages';

const PortfolioPage = ({
  imageURL1, imageURL2, imageURL3, firstName, lastName
}) => {
  return (
    <>

        <div className="slider fs" id='portfolio'>
          <PortfolioImages imageURL1={imageURL1} imageURL2={imageURL2} imageURL3={imageURL3} firstName={firstName} lastName={lastName} />
        </div>

    </>
  );
};


export default PortfolioPage;

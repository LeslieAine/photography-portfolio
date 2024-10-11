import React from 'react'

const HomePage = ({
  imageURL1,
  imageURL2,
  imageURL3,
}) => {
  return (
    <>
        <section className="main" id='home'>
          <div className="img-grid">
            <div className="item-sizer"></div>
            {imageURL1 && (
              <a href={imageURL1} data-caption="Portrait #1" className="item lightbox">
                <img
                  src={imageURL1}
                  alt="Photographer Image 1"
                />
              </a>
            )}
            {imageURL2 && (
              <a href={imageURL2} data-caption="Photographer Image 2" className="item lightbox">
                <img
                  src={imageURL2}
                  alt="Photographer Image 2"
                />
              </a>
            )}
            {imageURL3 && (
              <a href={imageURL3} data-caption="Photographer Image 3" className="item lightbox">
                <img
                  src={imageURL3}
                  alt="Photographer Image 3"
                />
              </a>
            )}
            {imageURL1 && (
              <a href={imageURL1} data-caption="Photographer Image 1" className="item lightbox">
                <img
                  src={imageURL1}
                  alt="Photographer Image 1"
                />
              </a>
            )}
            {imageURL2 && (
              <a href={imageURL2} data-caption="Photographer Image 2" className="item lightbox">
                <img
                  src={imageURL2}
                  alt="Photographer Image 2"
                />
              </a>
            )}
            {imageURL3 && (
              <a href={imageURL3} data-caption="Photographer Image 3" className="item lightbox">
                <img
                  src={imageURL3}
                  alt="Photographer Image 3"
                />
              </a>
            )}
            {imageURL1 && (
              <a href={imageURL1} data-caption="Photographer Image 1" className="item lightbox">
                <img
                  src={imageURL1}
                  alt="Photographer Image 1"
                />
              </a>
            )}
            {imageURL2 && (
              <a href={imageURL2} data-caption="Photographer Image 2" className="item lightbox">
                <img
                  src={imageURL2}
                  alt="Photographer Image 2"
                />
              </a>
            )}
            {imageURL3 && (
              <a href={imageURL3} data-caption="Photographer Image 3" className="item lightbox">
                <img
                  src={imageURL3}
                  alt="Photographer Image 3"
                />
              </a>
            )}
            {imageURL1 && (
              <a href={imageURL1} data-caption="Photographer Image 1" className="item lightbox">
                <img
                  src={imageURL1}
                  alt="Photographer Image 1"
                />
              </a>
            )}
            {imageURL2 && (
              <a href={imageURL2} data-caption="Photographer Image 2" className="item lightbox">
                <img
                  src={imageURL2}
                  alt="Photographer Image 2"
                />
              </a>
            )}
            {imageURL3 && (
              <a href={imageURL3} data-caption="Photographer Image 3" className="item lightbox">
                <img
                  src={imageURL3}
                  alt="Photographer Image 3"
                />
              </a>
            )}
            {imageURL1 && (
              <a href={imageURL1} data-caption="Photographer Image 1" className="item lightbox">
                <img
                  src={imageURL1}
                  alt="Photographer Image 1"
                />
              </a>
            )}
            {imageURL2 && (
              <a href={imageURL2} data-caption="Photographer Image 2" className="item lightbox">
                <img
                  src={imageURL2}
                  alt="Photographer Image 2"
                />
              </a>
            )}
          </div>
        </section>
      {/* </div> */}
    </>
  );
};

export default HomePage;

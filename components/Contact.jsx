import React from 'react'
import ContactForm from './ContactForm';


const ContactPage = ({
  imageURL2
}) => {
  return (
    <>
        <div className='fs vcenter' id='contact'>
          <div className='bg faded-more' style={{ backgroundImage: `url(${imageURL2})` }}></div>

          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante eget est condimentum scelerisque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante eget est condimentum scelerisque.</p>
              </div>
              <div className="col-md-5 col-md-offset-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};


export default ContactPage;


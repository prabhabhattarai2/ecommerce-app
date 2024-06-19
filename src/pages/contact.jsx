


import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    console.log('Email:', email);
    console.log('Message:', message);
    // Show success message
    toast.success('Message sent successfully');
    // Reset form fields
    setEmail('');
    setMessage('');
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      {/* <section className="contact-wrapper p-5"> */}
      
      {/* </section> */}

      <div className="contact-wrapper-details p-5">
       
      </div>

      <div className="contact-message p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
              <div className="card p-5">
                <h2 className='text-center mb-4'>Leave Us A message</h2>
                <div className=" d-flex align-items-center justify-content-center">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div className='col-12'>
                      <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                      <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">message</label>
                      <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} rows="3"></textarea>
                    </div>
                    <div className='col-12 text-center gap-2'>
                      <button id='button-link' type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default Contact;


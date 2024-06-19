
import React, { useEffect, useState } from 'react';


const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
   
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

  
    handleResize();

   
    window.addEventListener('resize', handleResize);

  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="text-white">#Know Us</h1>
                <p className='text-white fs-3'>Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us p-5">
        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1><b>Who are we?</b></h1>
            <p className="card-text mb-3">At Our store, you'll find a wide variety of stores, from popular retail chains to local boutiques, offering everything from fashion and electronics to home goods and specialty items. With ample parking and easy access, we make it simple for you to shop, dine, and enjoy your time with us. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

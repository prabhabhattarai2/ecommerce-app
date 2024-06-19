
import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import banner from '../assets/images/banner/b17.jpg';
// import blog2 from '../assets/images/blog/blog-2.jpg';
// import blog3 from '../assets/images/blog/blog-3.jpg';
// import blog4 from '../assets/images/blog/blog-4.jpg';
import Hero from '../components/hero';

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className='back-details'>
                      <p className='mb-3 text'>Trade in offer</p>
                      <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Hero />

      <section className="featured-products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
            <Featuredproducts />
          </div>
        </div>
      </section>

      <section className="repair-services p-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="repair-details text-center align-items-center">
              <h5 className='mb-3 text-white'>Repair Services</h5>
              <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default Home;

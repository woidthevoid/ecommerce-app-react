import React from 'react';
const Home = () => {
  return (
    <>
      HeroBanner
      <div className='products-heading'>
        <h2>Best Selling Products Right Now!</h2>
        <p>HiFi, TV, Smart Home, we got it all</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => product )}
      </div>

      Footer
    </>
  );
}

export default Home;
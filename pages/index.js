import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import FooterBanner from '@/components/FooterBanner';
import { client } from '@/lib/client';
import Product from '@/components/Product';

const Home = ({ products, banners }) => {
  return (
    <>
      <HeroBanner heroBanner={banners.length && banners[0]} />
      <div className='products-heading'>
        <h2>Best Selling Products Right Now!</h2>
        <p>HiFi, TV, Smart Home, we got it all</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product.id} product={product} />)}
      </div>
      <FooterBanner footerBanner={banners.length && banners[0]} />
    </>
  );
}

export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      banners,
    },
  }
};

export default Home;
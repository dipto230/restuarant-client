import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import ExtraSection from './ExtraSection/ExtraSection';
import ContactSection from '../ContactSection';

const Home = () => {
    return (
        <div>
      <Banner></Banner>
      <Category></Category>
      <ExtraSection></ExtraSection>
      <PopularMenu></PopularMenu>
      <ContactSection></ContactSection>
      <Featured></Featured>
      <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;
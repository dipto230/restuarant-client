import React, { useEffect, useState } from 'react';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
    const [reviews, setReviews]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
     <section className='my-20'>
        <SectionTittle
            subHeading="What Our Client Say"
            heading="TESTIMONIALS"

        />
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review=><SwiperSlide

            key={review._id}
            
            >
            <div className=' flex flex-col items-center mx-24 my-16'>
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <RiDoubleQuotesL />
                <p className='py-8'>{review.details}</p>
                <h3 className='text-2xl text-orange-50'>{review.name}</h3>
            </div>

            </SwiperSlide>)
        }
      </Swiper>
     </section>
    );
};

export default Testimonials;
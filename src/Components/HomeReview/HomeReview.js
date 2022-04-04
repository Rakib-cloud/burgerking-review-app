import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const HomeReview = () => {
    const [reviews,SetReviews]=useState([]);
    useEffect(()=>{
        fetch('food.json').then(res=>res.json()).then(data=>SetReviews(data));

   },[])
    return (
        <div className='container'>
            {
                reviews.slice(0,3).map(review=><ReviewDetail  key={review.id} review={review}></ReviewDetail> )
            }
        </div>
    );
};

export default HomeReview;
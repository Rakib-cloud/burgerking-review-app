import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {
    const [reviews,SetReviews]=useState([]);
    useEffect(()=>{
        fetch('food.json').then(res=>res.json()).then(data=>SetReviews(data));

   },[])
    return (
        <div>
          
            {
                reviews.map(review=><ReviewDetail key={review.id} review={review}></ReviewDetail> )
            }
        </div>
    );
};

export default Review;
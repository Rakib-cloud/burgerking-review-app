import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css'

const Review = () => {
    const [reviews,SetReviews]=useState([]);
    useEffect(()=>{
        fetch('food.json').then(res=>res.json()).then(data=>SetReviews(data));

   },[])
    return (
        <div >
            <h1 style={{color: "white"}}>Check who are review this food</h1>

              <div className='container'>
              {
                reviews.map(review=><ReviewDetail  key={review.id} review={review}></ReviewDetail> )
              }
              </div>
            
           
        </div>
    );
};

export default Review;
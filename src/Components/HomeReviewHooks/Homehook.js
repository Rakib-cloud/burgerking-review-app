import React from 'react';
import Food from '../Hooks/Food';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Homehook = () => {
    const [reviews,SetReviews]=Food();
    
    return (
        <div>
            <div className='container'>
                {
                    reviews.slice(0,3).map(review=><ReviewDetail  key={review.id} review={review}></ReviewDetail> )
                }
            </div>
        </div>
    );
};

export default Homehook;
import React from 'react';

const ReviewDetail = (props) => {
    const {name,ratings,reviewdetail}=props.review;
    return (
        <div>
            <h2>Name:{name}</h2>
            <p>Ratings:{ratings}</p>
            <h3>{reviewdetail}</h3>
        </div>
    );
};

export default ReviewDetail;
import React from 'react';
import { Card } from 'react-bootstrap';
import './ReviewDetail.css'

const ReviewDetail = (props) => {
    const { name, ratings, reviewdetail, img } = props.review;
    return (
        
        <div className='detail-container'>
           
               
        
           <div className='detail-card'>
           <Card  style={{ width: '18rem',border:'5px solid green',background:'gray',color:'white' }}>
            <Card.Img  id='img'variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Reviewer Name:{name}</Card.Title>
                    <Card.Text>
                        {reviewdetail}
                    </Card.Text>

                    <Card.Text>
                        Ratings:{ratings}
                    </Card.Text>

                </Card.Body>
            </Card> 
           </div>

           
        </div>
    );
};

export default ReviewDetail;
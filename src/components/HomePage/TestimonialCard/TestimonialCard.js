import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="col-md-3 card p-4 me-3 shadow">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi atque accusantium architecto cupiditate dolore laudantium et fuga ex, eius iste incidunt nihil porro magni illum expedita eveniet ut sit!
            </p>
            <div className="person mt-2 d-flex align-items-center">
                <img src={testimonial.pImg} alt="" />
                <div className="ms-3">
                    <p className="color-primary m-0">{testimonial.pName}</p>
                    <small className="text-secondary">California</small>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
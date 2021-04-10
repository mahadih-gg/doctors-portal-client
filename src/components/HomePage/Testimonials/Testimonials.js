import React from 'react';
import './Testimonials.css';
import coteImg from '../../../images/coteImg.png';
import person1 from '../../../images/person-1.png';
import person2 from '../../../images/person-2.png';
import person3 from '../../../images/person-3.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonials = [
    {
        pImg: person1,
        pName: 'Winson Herry'
    },
    {
        pImg: person2,
        pName: 'Lisa Joben'
    },
    {
        pImg: person3,
        pName: 'paoyel Lio'
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials mb-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-9">
                        <h4 className="color-primary">TESTIMONIAL</h4>
                        <h1 className="color-secondary">What’s Our Patients</h1>
                        <h1 className="color-secondary">Says</h1>
                    </div>
                    <div className="col-md-3">
                        <img src={coteImg} height="150px" alt="" />
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    {
                        testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
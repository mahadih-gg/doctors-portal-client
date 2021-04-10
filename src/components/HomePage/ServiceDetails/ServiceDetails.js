import React from 'react';
import './ServiceDetails.css'

const ServiceDetails = ({ service }) => {
    const { sTitle, sImg } = service;
    return (
        <div className="col-md-4 text-center mt-5 pt-5">
            <img src={sImg} alt="" height="50px" />
            <h5 className="my-3">{sTitle}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad id explicabo consequatur doloribus, commodi velit!</p>
        </div>
    );
};

export default ServiceDetails;
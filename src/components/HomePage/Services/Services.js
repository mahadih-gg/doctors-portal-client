import React from 'react';
import './Services.css';

import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const services = [
    {
        sTitle: 'Fluoride Treatment',
        sImg: fluoride
    },
    {
        sTitle: 'Cavity Filling',
        sImg: cavity
    },
    {
        sTitle: 'Tooth Whitening',
        sImg: whitening
    }
]

const Services = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h4 className="color-primary">OUR SERVICES</h4>
                <h1 className="color-secondary">Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        services.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
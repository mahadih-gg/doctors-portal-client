import React from 'react';
import './BusinessInfo.css';
import { faSearch, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../InfoCard/InfoCard';

const cardsInfo = [
    {
        title: 'Opening Hours',
        description: 'We are open on 7 days',
        icon: faSearch,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarkerAlt,
        background: 'secondary'
    },
    {
        title: 'Contact With Us',
        description: '+000 123 456789',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    cardsInfo.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;
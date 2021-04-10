import React from 'react';
import './HeaderMain.css';
import headerMainChair from '../../../images/headerMainChair.png'

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center header-main">
            <div className="col-md-4 offset-md-1">
                <h1 className="color-secondary">Your New Smile</h1>
                <h1 className="color-secondary">Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis facere excepturi voluptatibus architecto? Itaque incidunt iste exercitationem harum.</p>
                <button className="btn btn-primary">Get appointment</button>
            </div>
            <div className="col-md-6">
                <img src={headerMainChair} className="img-fluid" alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;
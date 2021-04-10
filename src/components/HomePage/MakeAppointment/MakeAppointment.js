import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png'


const MakeAppointment = () => {
    return (
        <section className="d-flex justify-content-center text-white appointment">
            <div className="container">

                <div className="row">
                    <div className="col-md-5 d-block d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 my-auto">
                        <h5 className="color-primary">APPOINTMENT</h5>
                        <h1 className="">Make an appointment</h1>
                        <h1 className="mb-3">Today</h1>
                        <p className="">
                            It is a long established fact that a reader will be distractedby the readable
                            content of a page when looking at its
                    </p>
                        <button className="btn btn-primary px-5 mt-3 mb-5">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
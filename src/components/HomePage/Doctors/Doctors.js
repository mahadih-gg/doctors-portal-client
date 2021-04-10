import React from 'react';
import './Doctors.css'
import doctorHalf from '../../../images/doctorHalf.png';
import DoctorDetails from '../DoctorDetails/DoctorDetails';


const doctors = [
    {
        dImg: doctorHalf,
        dName: 'Dr. Alex Marfy'
    },
    {
        dImg: doctorHalf,
        dName: 'Dr. Jojo'
    },
    {
        dImg: doctorHalf,
        dName: 'Dr. Zack Poliv'
    }
]

const Doctors = () => {
    return (
        <section className="my-5 doctors">
            <h3 className="color-primary text-center">Our Doctors</h3>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    {
                        doctors.map(doctor => <DoctorDetails doctor={doctor}></DoctorDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;
import React from 'react';
import './DoctorDetails.css'

const DoctorDetails = ({ doctor }) => {
    return (
        <div className="col-3 text-center mt-5">
            <img src={doctor.dImg} height="250px" alt="" />
            <h4 className="my-3">{doctor.dName}</h4>
        </div>
    );
};

export default DoctorDetails;
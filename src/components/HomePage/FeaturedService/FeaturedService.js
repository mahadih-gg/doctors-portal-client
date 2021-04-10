import React from 'react';
import './FeaturedService.css'
import dentalTreatment from '../../../images/dentalTreatment.png'

const FeaturedService = () => {
    return (
        <section className="my-5 d-flex justify-content-center dentalTreatment">
            <div className="row w-75">
                <div className="col-md-5 dentalTreatmentImg">
                    <img src={dentalTreatment} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 ms-4 my-auto dentalTreatmentContent">
                    <h1 className="color-secondary">Exceptional Dental</h1>
                    <h1 className="color-secondary mb-5">Care, on Your Terms</h1>
                    <p className="text-secondary mt-5">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its
                        layout. The point of using Lorem Ipsumis that it has
                        a more-or-less normal distribution of letters,as opposed
                        to using ‘Content here, content here’, making it look like
                        readable English. Many desktop publishing packages
                        and web page
                    </p>
                    <button className="btn btn-primary px-5 mt-4">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;
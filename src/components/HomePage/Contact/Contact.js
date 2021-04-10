import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact">
            <h4 className="color-primary text-center pt-5 pb-3">CONTACT US</h4>
            <h1 className="text-white text-center">Always Connect with us </h1>

            <div className="container w-75 p-5">
                <form action="">
                    <input type="email" className="form-control" name="email" id="" placeholder="Email Address" required />
                    <input type="text" className="form-control" name="subject" id="" placeholder="Subject" required />
                    <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Your Massage"></textarea>
                    <div className="w-100 d-flex justify-content-center">
                        <button className="btn btn-primary mt-4 btn-submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
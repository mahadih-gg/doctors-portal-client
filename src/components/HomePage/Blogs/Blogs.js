import React from 'react';
import './Blogs.css'
import person1 from '../../../images/person-1.png';
import person2 from '../../../images/person-2.png';
import person3 from '../../../images/person-3.png';
import BlogCard from '../BlogCard/BlogCard';

const blogs = [
    {
        pImg: person2,
        pName: 'Dr. Winson Herry',
        time: '23 April 2020',
        title: 'Check at least a doctor in a year for your teeth'
    },
    {
        pImg: person3,
        pName: 'Dr. Lisa Joben',
        time: '5 March 2020',
        title: 'It is a long established fact that by the readable content of a lot layout. The point '

    },
    {
        pImg: person1,
        pName: 'paoyel Lio',
        time: '20 May 2020',
        title: 'The tooth cancer is taking a challenge'
    }
]


const Blogs = () => {
    return (
        <section className="testimonials mb-5">
            <div className="container">
                <div className="col-md-9">
                    <h4 className="color-primary">TESTIMONIAL</h4>
                    <h1 className="color-secondary">What’s Our Patients</h1>
                    <h1 className="color-secondary">Says</h1>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    {
                        blogs.map(blog => <BlogCard blog={blog}></BlogCard>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Blogs;
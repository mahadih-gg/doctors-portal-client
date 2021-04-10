import React from 'react';
import './BlogCard.css'

const BlogCard = ({ blog }) => {
    return (
        <div className="col-md-3 card p-4 me-3 shadow">
            <div className="person mt-2 d-flex align-items-center">
                <img src={blog.pImg} alt="" />
                <div className="ms-3">
                    <p className="color-primary m-0">{blog.pName}</p>
                    <small className="text-secondary">{blog.time}</small>
                </div>
            </div>
            <h5 className="mt-4 mb-2">{blog.title}</h5>
            <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi atque accusantium architecto cupiditate dolore laudantium et fuga ex!
            </p>
        </div>
    );
};

export default BlogCard;
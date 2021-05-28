import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';
import c1 from '../../../images/c1.jpg';
import c2 from '../../../images/c2.jpg';
import c3 from '../../../images/c3.jpg';
import c4 from '../../../images/c4.jpg';

const Courses = () => {
    return (
        <div className="container mt-5 pt-5 mb-4">
            <h1 className="text-dark mt-5 text-center fs-1 fw-bold">Some Courses</h1>
            <div className="row d-flex g-5 mt-3 pt-3">
                <div className=" col-md-6">
                    <div className="card" style={{width: "100%", height:"100%"}}>
                        <img src={c1} className="card-img-top img-design" alt="..."/>
                            <div className="card-body">
                                <h2 className="card-title fw-bold text-info">HTML And CSS Basic Course</h2>
                                <h5 className="card-text">Launch a career as a web designer by learning HTML5, CSS3, responsive design, Sass and more!</h5>
                                <h4>Course duration- 1 month</h4>
                                <button className="btn btn-info p-2 fw-bold fs-4 ms-1" type="button"><Link className="text-white" to="/login" style={{textDecoration:"none"}}>Enroll Now</Link></button>
                            </div>
                    </div>
                </div>
                <div className=" col-md-6">
                    <div className="card" style={{width: "100%", height:"100%"}}>
                        <img src={c2} className="card-img-top img-design" alt="..."/>
                            <div className="card-body">
                                <h2 className="card-title fw-bold text-info">Javascript Course</h2>
                                <h5 className="card-text">Launch a career as a Javascript Developer by learning Javascript, typescript and more!</h5>
                                <h4>Course duration- 3 month</h4>
                                <button className="btn btn-info p-2 fw-bold fs-4 ms-1" type="button"><Link className="text-white" to="/login" style={{textDecoration:"none"}}>Enroll Now</Link></button>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row g-5 mt-3 pt-3">
                <div className=" col-md-6">
                    <div className="card" style={{width: "100%", height:"100%"}}>
                        <img src={c3} className="card-img-top img-design" alt="..."/>
                            <div className="card-body">
                                <h2 className="card-title fw-bold text-info">React zero to hero Course</h2>
                                <h5 className="card-text">Launch a career as a React Develop by learning React, Javascript and more!</h5>
                                <h4>Course duration- 6 month</h4>
                                <button className="btn btn-info p-2 fw-bold fs-4 ms-1" type="button"><Link className="text-white" to="/login" style={{textDecoration:"none"}}>Enroll Now</Link></button>
                            </div>
                    </div>
                </div>
                <div className=" col-md-6">
                    <div className="card" style={{width: "100%", height:"100%"}}>
                        <img src={c4} className="card-img-top img-design" alt="..."/>
                            <div className="card-body">
                                <h2 className="card-title fw-bold text-info">Php And SQL Basic COurse</h2>
                                <h5 className="card-text">Launch a career as a Backend Developer by learning Php, SQL and more!</h5>
                                <h4>Course duration- 3 month</h4>
                                <button className="btn btn-info p-2 fw-bold fs-4 ms-1" type="button"><Link className="text-white" to="/login" style={{textDecoration:"none"}}>Enroll Now</Link></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
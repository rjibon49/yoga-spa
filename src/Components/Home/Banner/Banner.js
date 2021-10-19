import React from 'react';
import { Link } from 'react-router-dom';
import '../../../GlobalStyle/GlobalStyle.css';

const Banner = () => {
    return (
        <div className="container-fluid banner-bg">
            <div className="container  ">
                <div className="banner-title">
                    <h1 className="mb-5 banner-title-text">
                    YOUR PRACTICE, REIMAGINED
                    </h1>
                    <Link to="/about">
                        <button className="btn btn-primary px-5 py-2 fs-3 fw-bold">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import '../../../Style/Style.css';

const Banner = () => {
    return (
        <div className="container-fluid banner-bg">
            <div className="container  ">
                <div className="row ">
                    <div className="col-xl-6 col-md-6 col-sm-12 ms-5">
                        <div className="banner-title">
                        <h1 className="mb-5">Yoga & Spa</h1>
                        <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
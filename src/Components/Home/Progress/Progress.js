import React from 'react';
import img1 from '../../../Images/Banner/progress.jpg'
import StyleProgress from './StyleProgress';

const Progress = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row my-5">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="progress-img my-5">
                            <img className="img-thumbnail border-0" src={img1} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 my-auto">
                        <div className="style-progress">
                            <StyleProgress></StyleProgress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
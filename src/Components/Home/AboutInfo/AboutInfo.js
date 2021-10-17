import React from 'react';
import '../../../GlobalStyle/GlobalStyle.css';
import { Link } from 'react-router-dom';

const AboutInfo = () => {
    return (
        <div className="about-info" >
            <div className="container px-5">
                <div className="row">
                    <div className="col-xl-6 col-md-8 col-sm-12">
                        <div className="info-title my-5">
                            <Link className="text-decoration-none" to="./about"><h2>About Us</h2></Link>
                            <hr className="divide" />
                            <h6 className="fst-italic"> Why love us? </h6>
                        </div>
                        <div className="row mx-auto mb-3">
                            <div className="col-2">
                                <i class="fas fa-hospital-symbol fs-1 icon-color"></i>
                            </div>
                            <div className="col-10 pe-5 mb-3">
                                <p className="pe-5"><strong>Improveing health.</strong> Health is given to man from birth, but, unfortunately, modern man forgets that the stock of this health is finite, and continues to behave as if he is eternal.</p>
                            </div>
                            <div className="col-2">
                                <i class="fas fa-snowflake fs-1 icon-color"></i>
                            </div>
                            <div className="col-10 pe-5 mb-3">
                                <p className="pe-5"><strong>Getting rid of stress and nervous disorders. </strong>Yoga is today one of the best remedies for neuropsychiatric disorders, that helps to believe in yourself.</p>
                            </div>
                            <div className="col-2">
                                <i class="fas fa-spa fs-1 icon-color"></i>
                            </div>
                            <div className="col-10 pe-5">
                                <p className="pe-5"><strong>Spiritual development. </strong> The practice of yoga develops the body to the level of mental mobility so that both the body and mind become mobile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;
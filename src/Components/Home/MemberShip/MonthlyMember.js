import React from 'react';
import { Link } from 'react-router-dom';

const MonthlyMember = () => {
    return (
        <div className="row mb-5 mt-5">
            <div className="col-xl-3 col-md-6 col-sm-12 mb-5">
                <div className="text-center">
                    <div className="bg-dark text-white pt-5 rounded">
                        <h5>One yoga class</h5>
                        <p><strong>feel free to explore</strong></p>
                        <div className="bg-secondary text-white pt-3 pb-5">
                            <p className="fs-3 py-4">$50</p>
                            <ul className="list-group text-start px-4 text-white pb-5">
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> 2-hour yoga workshop</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> 1-hour of meditation</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> personal trainer</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> carpet as a gift</li>
                            </ul>
                            <Link to="/notFound">
                                <button className="btn btn-primary">Start Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
                <div className="text-center">
                    <div className="bg-dark text-white pt-5 rounded">
                        <h5>Unlimited yoga</h5>
                        <p><strong>feel free to explore</strong></p>
                        <div className="bg-secondary text-white pt-3 pb-5">
                            <p className="fs-3 py-4">$200</p>
                            <ul className="list-group text-start px-4 text-white pb-5">
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> 2-hour yoga workshop</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> 1-hour of meditation</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> personal trainer</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> carpet as a gift</li>
                            </ul>
                            <Link to="/notFound">
                                <button className="btn btn-primary">Start Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
                <div className="text-center">
                    <div className="bg-dark text-white pt-5 rounded">
                        <h5>10 yoga classes</h5>
                        <p><strong>feel free to explore</strong></p>
                        <div className="bg-secondary text-white pt-3 pb-5">
                            <p className="fs-3 py-4">$120</p>
                            <ul className="list-group text-start px-4 text-white pb-5">
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i>  2-hour yoga workshop</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i>  1-hour of meditation</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i>  personal trainer</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i>  carpet as a gift</li>
                            </ul>
                            <Link to="/notFound">
                                <button className="btn btn-primary">Start Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
                <div className="text-center">
                    <div className="bg-dark text-white pt-5 rounded">
                        <h5>Experienced</h5>
                        <p><strong>feel free to explore</strong></p>
                        <div className="bg-secondary text-white pt-3 pb-5">
                            <p className="fs-3 py-4">$90</p>
                            <ul className="list-group text-start px-4 text-white pb-5">
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> 2-hour yoga workshop</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> 1-hour of meditation</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> personal trainer</li>
                                <li className="list-group-item border-0 bg-secondary text-white"><i className="fas fa-arrow-right"></i> carpet as a gift</li>
                            </ul>
                            <Link to="/notFound">
                                <button className="btn btn-primary">Start Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyMember;
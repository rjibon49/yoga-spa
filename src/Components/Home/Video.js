import React from 'react';
import { Link } from 'react-router-dom';

const Video = ({video}) => {
    const {id, class_img, class_title, title, images} = video;

    return (
        <div className="col-xl-4 col-md-6 col-sm-12  pt-5 my-5">
            <div className="mx-3 rounded bg-dark pt-2 pb-3 card mb-2 mt-5">
                <Link className="text-decoration-none" to={`/course/${id}`}>
                    <img className="img-thumbnail" src={class_img} alt="" />
                        <div className="text-white text-center my-3">
                            <h4 className="">{class_title}</h4>
                        </div>
                </Link>
                <p className="text-center text-danger">By</p>
                <Link className="text-decoration-none" to={`/instructors/${id}`}>
                    <div className="d-flex justify-content-center mt-1 mb-4 text-white">
                        <img style={{width:30,height:30, borderRadius:100}} src={images} alt="" />
                        <h5 className="my-auto mx-3">{title}</h5>
                    </div>
                </Link>
            </div>
            
        </div>
    );
};

export default Video;
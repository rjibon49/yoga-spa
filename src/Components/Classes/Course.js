import React from 'react';
import { Link } from 'react-router-dom';
import '../../GlobalStyle/GlobalStyle.css'

const Course = ({course}) => {
    const {class_img, id, class_title} = course;
    return (
        <div className="col-xl-6 col-md-6 col-sm-12 my-5">
            <div className="border rounded py-3">
                <div className="m-4 img-thumbnail border-0 course-video " style={{backgroundImage:`url(${class_img}`, backgroundPosition: 'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat',height:250}}>
                    <div className="video-play">
                        <div className="play-bg">
                            <Link to={`/course/${id}`} className="play-icon text-decoration-none">
                                <span className="play-button">
                                    <i className="far fa-play-circle play-icon "></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h2>{class_title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Course;
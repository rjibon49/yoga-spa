import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CourseDetails = () => {

    const {courseId} = useParams();
    const [courseDetail, setCourseDetail] = useState({});

    useEffect(()=>{
        const url = `https://api.npoint.io/21ae0f94db0c80646620/${courseId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCourseDetail(data));
    },[courseId]);
    const {class_img, class_title, images,id, title,class_module,class_lavel,classPart1} = courseDetail;

    return (
        <div className="container-fluid">
            <div className="container my-5">
                <div className="row">
                    <div className="col-xl-6 col- col-sm-12 my-5">
                        <div className="img-thumbnail border-0 course-video " style={{backgroundImage:`url(${class_img}`, backgroundPosition: 'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat',height:350}}>
                            <div className="video-play">
                                <div className="coursedetails-bg">
                                     <span className="coursedetails-button">
                                        <i class="far fa-play-circle play-icon "></i>
                                    </span>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="col-xl-6 col- col-sm-12 my-5">
                        <div className="">
                            <h1 className="details-title">{class_title} <i class="fas fa-lock"></i></h1>
                            <div className="row">
                                <div className="col-1">
                                    <img className="details-image" src={images} alt="" />
                                </div>
                                <div className="col-11">
                                    <Link to={`/instructors/${id}`}>
                                        <p className="fs-2">{title}</p>
                                    </Link>
                                </div>

                                <table class="table table-borderless w-75 fs-4">
                                    <thead>
                                        <tr>
                                        <th scope="col-"></th>
                                        <th scope="col-"></th>
                                        <th scope="col-"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">CLASSES</th>
                                        <td>{class_module}</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">AVERAGE DURATION</th>
                                        <td>30 minites</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">DIFFICULTY</th>
                                        <td >{class_lavel}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr className="secondery" />
                                <div>
                                    <p className="fs-4">{classPart1}</p>
                                </div>
                                <button className=" w-100 py-4 fs-2 bold btn-primary btn"><strong>START FREE TRIAL</strong></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const InstructorDetails = () => {
    const {tutorId} = useParams();
    const [instructorDetails, setInstructorDetails] = useState({});
    console.log(instructorDetails);

    useEffect(() => {
        const url = `https://api.npoint.io/21ae0f94db0c80646620/${tutorId}`;
        fetch(url)
        .then ( res => res.json())
        .then ( data => setInstructorDetails(data));
    }, []);

    const {id, title, coverImage, images, part1,part2,part3, series, class_img,class_title,class_module,class_lavel,class_view} = instructorDetails;
    let imageUrl = coverImage;
    console.log(instructorDetails);

    return (
        <div>
            <div className=""style={{ height:700, backgroundPosition: 'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundImage:`url(${imageUrl}`}} >
            <div className="instructor-title" >
                <div className="Instructor-details text-center">
                    <h1 className="instructor mb-5">{title}</h1>
                    <span>
                    <i className="fab fa-facebook text-white fs-1 me-5"></i>
                    <i className="fab fa-instagram text-white fs-1 me-5"></i>
                    <i className="fab fa-dribbble text-white fs-1 me-5"></i>
                    </span>
                    </div>
                 </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-3 col-sm-12">
                        <div>
                            <img className="img-thumbnail mx-auto d-block rounded-circle instructor-img" src={images} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-8 col-md-7 col-sm-12">
                        <div className="mt-5 fs-4">
                            <p className="">{part1}</p>
                            <p className="">{part2}</p>
                            <p className="">{part3}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 pt-5">
                <div>
                    <h2 className="text-center text-uppercase fw-bold fs-1">{series}</h2>
                    <hr className="w-50 mx-auto pb-1"/>
                </div>
                <div className="row">
                    <div className="col-xl-6 col- col-sm-12 my-5 ">
                        <div className="mx-4 rounded text-white bg-primary py-5">
                            <Link to={`/course/${id}`}>
                                <img className="img-thumbnail" src={class_img} alt="hello" />
                            </Link>
                            <div className="d-flex justify-content-between px-3 fs-4 mt-4">
                                <p><i class="far fa-play-circle"></i> {class_module}</p>
                                <p><i class="fas fa-signal"></i> {class_lavel}</p>
                                <p><i class="fas fa-eye"></i> {class_view}</p>
                            </div>
                            <Link to={`/course/${id}`} className="text-white">
                                <h3 className="text-center mt-3 fs-3 fw-bolder">{class_title}</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col- col-sm-12 my-5 ">
                        <div className="mx-4 rounded text-white bg-primary py-5">
                            <Link to={`/course/${id}`}>
                                <img className="img-thumbnail" src={class_img} alt="hello" />
                            </Link>
                            <div className="d-flex justify-content-between px-3 fs-4 mt-4">
                                <p><i class="far fa-play-circle"></i> {class_module}</p>
                                <p><i class="fas fa-signal"></i> {class_lavel}</p>
                                <p><i class="fas fa-eye"></i> {class_view}</p>
                            </div>
                            <Link to={`/course/${id}`} className="text-white">
                                <h3 className="text-center mt-3 fs-3 fw-bolder">{class_title}</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mb-5 pb-5 mt-5">
                    <Link to="/courses">
                        <button className="btn btn-primary mx-auto d-block w-25 py-2 fs-3"> More Classes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InstructorDetails;
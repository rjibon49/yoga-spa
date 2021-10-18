
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const InstructorDetails = () => {
    const {tutorId} = useParams();
    const [instructorDetails, setInstructorDetails] = useState({});

    useEffect(() => {
        const url = `https://api.npoint.io/41a8b062ddb20f353dc4/${tutorId}`;
        fetch(url)
        .then ( res => res.json())
        .then ( data => setInstructorDetails(data));
    }, [tutorId]);

    const {title, coverImage, images, part1,part2,part3} = instructorDetails;
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
        </div>
    );
};

export default InstructorDetails;
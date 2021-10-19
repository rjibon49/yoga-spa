import React from 'react';
import { Link } from 'react-router-dom';
import useInstructors from '../../hooks/useInstructors';

const Videos = () => {
    const [videos] = useInstructors();

    return (
        <div className="container py-5">
                {
                videos.map ( v=>
                    <div className="border rounded py-3">
                        <div className="m-4 img-thumbnail border-0 course-video " style={{backgroundImage:`url(${v.class_img}`, backgroundPosition: 'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat',height:500}}>
                            <div className="video-play">
                                <div className="video-bg">
                                    <Link to={`/course/${v.id}`} className="play-icon text-decoration-none">
                                    <span className="play-button">
                                        <i className="far fa-play-circle play-icon "></i>
                                    </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h2>{v.class_title}</h2>
                        </div>
            </div>).slice(1,3)
            }
        </div>
    );
};

export default Videos;
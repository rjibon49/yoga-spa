import React from 'react';
import useInstructors from '../../hooks/useInstructors';
import Video from './Video';

const Videos = () => {
    const [videos] = useInstructors();
    return (
        <div className="container py-5">
            <div className="row">
                {
                    videos.map ( video => <Video
                    key = {video.id}
                    video = {video}
                    ></Video>).slice(4,7)
                }
            </div>      
        </div>
    );
};

export default Videos;
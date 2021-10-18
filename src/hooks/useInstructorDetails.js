import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useInstructorDetails = () =>{
    const[tutorId] = useParams();
    const [instructorDetails, setInstructorDetails] = useState({});

    useEffect(() => {
        const url = `https://api.npoint.io/41a8b062ddb20f353dc4/${tutorId}`;
        fetch(url)
        .then ( res => res.json())
        .then ( data => setInstructorDetails(data));
    }, []);

    // return courses item
    return [instructorDetails] ;
}

export default useInstructorDetails;
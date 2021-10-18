import { useEffect, useState } from "react";

const useInstructorDetails = () =>{

    const [Classes, setClasses] = useState([]);

    useEffect(() => {
        const url = `https://api.npoint.io/21ae0f94db0c80646620`;
        fetch (url)
        .then ( res => res.json())
        .then ( data => setClasses(data));
    }, []);

    // return courses item
    return [Classes] ;
}

export default useInstructorDetails;
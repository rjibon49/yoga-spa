import { useEffect, useState } from "react"

const useAbout = () =>{
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        fetch('./about.json')
        .then ( res => res.json())
        .then ( data => setAbouts(data));
    }, []);

    // return courses item
    return [abouts] ;
}

export default useAbout;
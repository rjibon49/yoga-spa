import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider , signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuth from "../Components/Form/Firebase/firebaseinit";

initializationAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider  = new GithubAuthProvider ();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
        .catch(error=> {
            setError(error.message);
        })
    }
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
        .catch(error=> {
            setError(error.message);
        })
    }



    useEffect ( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const lockDown = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        });
    }

    return {
        user,
        signInUsingGoogle,
        signInUsingGithub,
        lockDown,
        error
    }
}

export default useFirebase;
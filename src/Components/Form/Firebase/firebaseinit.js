import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseconfig";

const initializationAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuth;
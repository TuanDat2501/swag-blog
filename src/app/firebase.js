// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
import firebase from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAklqK1cASnRUutA3FQa_Ee_T1w2_DzjV4",
    authDomain: "swag-video-fcf45.firebaseapp.com",
    projectId: "swag-video-fcf45",
    storageBucket: "swag-video-fcf45.appspot.com",
    messagingSenderId: "361228818432",
    appId: "1:361228818432:web:5660c36f7b667bec42a0e5",
    measurementId: "G-5ETL7833DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = () => {
    if (typeof window !== "undefined") {
        return firebase.analytics()
    } else {
        return null
    }
}
export const storage = getStorage(app);
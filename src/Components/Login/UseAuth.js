import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);


const Auth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    signInWithGoogle = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            console.log(res);
            return res.user;
        })
        .catch(err =>{
            console.log(err);
            return err.message;
        })
    }
    
    return {
        signInWithGoogle
    }
}


export default Auth;
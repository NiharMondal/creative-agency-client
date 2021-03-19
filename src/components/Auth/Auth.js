import React, { useContext } from 'react';
import {Card,Button}from '@material-ui/core'
import './Auth.css'
import gLogo from './Google_logo.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
   firebase.initializeApp(firebaseConfig)
}
const Auth = () => {
   const [user, setUser] = useContext(UserContext);
   const history = useHistory();
   const location = useLocation()
   let { from } = location.state || { from: { pathname: "/" } };

   const handleGoogleLogin = () => {
      const gProvider = new firebase.auth.GoogleAuthProvider();

      firebase.auth()
         .signInWithPopup(gProvider)
         .then((result) => {
            const {displayName,email} = result.user;
            setUser({ ...user, email: email, name: displayName })
            history.replace(from)
         })
         .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
         });
      
   }
   return (
      <div className="auth_wrapper">
         <div className="auth_content">
            <Card className="text-center p-5">
               <h4 className="mb-4">Login With</h4>
               <Button
                  onClick={handleGoogleLogin}
                  variant="contained"
                  className="g_btn mb-2"
               >
                  
               <img src={gLogo} alt=""/>
                  Login With Google
               </Button>
               <p>Don't have an account? <span className="text-success">Create an account</span></p>
            </Card>
         </div>
      </div>
   );
};

export default Auth;
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from '../../App';
import { Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  const [SignedInUser, setSignedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
    var provider = new firebase.auth.GoogleAuthProvider();
    const signInButton = () => {
        firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var user = result.user;
        const { displayName, email, photoURL } = user;
        const loggedInUser = {isSignedIn:true ,name: displayName, email, photoURL };
        setSignedInUser(loggedInUser);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, email, errorMessage, credential);
      });
    }
    return (
        <div style={{textAlign: 'center', marginTop: '2%'}}>
            <Button style={{border: '1px solid blue', color: 'lighblue'}} color="primary" onClick={signInButton}>Sign In With Google</Button>
        </div>
    );
};

export default LogIn;



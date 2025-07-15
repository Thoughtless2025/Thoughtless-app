import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyB4uInAeX3CEG0VXQ0BkB2DALN7bEyWZAo",
  authDomain: "thoughtless-7aacc.firebaseapp.com",
  projectId: "thoughtless-7aacc",
  storageBucket: "thoughtless-7aacc.firebasestorage.app",
  messagingSenderId: "350287519269",
  appId: "1:350287519269:web:a7c207976cb900027469cc",
  measurementId: "G-G9RKNN0LZV"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  useEffect(() => {
    // FirebaseUI configuration
    const uiConfig = {
      signInSuccessUrl: '/', // Redirect URL after successful sign in
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      // tosUrl: '<your-tos-url>',
      // Privacy policy url.
      // privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

    // Cleanup function for when the component unmounts
    return () => {
      ui.reset();
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h1>My App</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
};

export default App;
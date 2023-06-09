import React from "react";
import GoogleSignIn from "../images/google-signin.png";
import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { IUser } from "../interface/interface";

const Welcome: React.FC = () => {
  //Signing in with Google Auth
  const googleSignIn = async () => {
    const provider: GoogleAuthProvider = new GoogleAuthProvider();
    try {
      //Initiates the Google sign-in process
      const result = await signInWithPopup(auth, provider);
      const user: IUser = {
        name: result.user.displayName,
        avatar: result.user.photoURL,
        createdAt: serverTimestamp(),
        uid: result.user.uid,
      };
      //Return reference for current user document (wether it exists or not)
      const userRef = doc(db, "users", user.uid);
      // Retrieve the current snapshot of the document from the Firestore database
      const userSnap = await getDoc(userRef);
      //If user doesn't exist create a new document in the Firestore database with the user's information
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          name: user.name,
          avatar: user.avatar,
          createdAt: serverTimestamp(),
          uid: user.uid,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="welcome">
      <h2>Welcome to Malachite Auctions!.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignIn}
          alt="sign in with google"
        />
      </button>
    </main>
  );
};

export default Welcome;

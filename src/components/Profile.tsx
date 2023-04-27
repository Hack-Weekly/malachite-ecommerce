import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Profile: React.FC = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log(user);
  const { displayName, email, uid, photoURL } = user;

  return (
    <div className="main">
      <h1>{displayName}</h1>
      <p>Email: {email}</p>
      <p>UID: {uid}</p>
      <img src={photoURL ?? undefined} alt="Profile" />
      {/* Render additional content */}
    </div>
  );
};

export default Profile;

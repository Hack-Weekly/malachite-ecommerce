import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import malachiteLogo from "../images/malachite-logo.png";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [user] = useAuthState(auth);

  const signOut = (): void => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">
        <img src={malachiteLogo} id="logo" alt="Logo" />
      </Link>
      <h1>Malachite Auctions</h1>
      {user ? (
        <div>
          <Link to="/myauctions" className="nav-link">
            Your Auctions
          </Link>
          <Link to="/newauction" className="nav-link">
            Add New Auction
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
          <button onClick={signOut} className="nav-link" type="button">
            Sign Out
          </button>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;

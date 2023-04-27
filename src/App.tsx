import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import MyAuctions from "./components/MyAuctions";
import NewAuction from "./components/NewAuction";
import Products from "./components/Products";

const App: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {`${error}`}</div>;
  }

  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> 
      : 
      <div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myauctions" element={<MyAuctions />} />
          <Route path="/newauction" element={<NewAuction />} />
        </Routes>
      </div>
      }
    </div>
  );
};

export default App;

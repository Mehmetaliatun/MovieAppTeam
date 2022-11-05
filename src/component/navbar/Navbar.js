import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase-config";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { async } from "@firebase/util";

const Navbar = () => {
  let path = useLocation().pathname;
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const signOutFunc = async () => {
    await signOut(auth);
    navigate("/login");
  };
  console.log(currentUser);
  return (
    <div className="navbar">
      <div className="warning">
        <p className="info">
          {path === "/login" && "Don't you have an account"}
          {path === "/register" && "Already have an account"}
          <Link
            className="link"
            to={`${path === "/login" ? "/register" : "/login"}`}
          >
            {path === "/register" && "Login"}
            {path === "/login" && "Register"}
          </Link>
        </p>
      </div>
      {currentUser && (
        <Link style={{ textDecoration: "none" }} to="/">
          <h2>
            Movie <span>DataBase</span>
          </h2>
          <h6>Go To Home Page</h6>
        </Link>
      )}

      <div className="logout">
        {currentUser && <h3>{currentUser.displayName}</h3>}

        {currentUser && (
          <button type="button" onClick={() => signOutFunc()}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

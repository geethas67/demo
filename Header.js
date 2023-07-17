// import React from "react";

// const Header = () => {
//   return (
//     <div className="ui fixed menu">
//       <div className="ui container center">
//         <h2>Ecom Site <br/> </h2>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({}) => {
  const [openLinks, setOpenLinks] = useState(false);
  const [authenticated, setauthenticated] = useState(false);
  const loggedIn = localStorage.getItem("authenticated");
  const [login, setLogin] = useState(true);

  useEffect(() => {
    const value = localStorage.getItem("authenticated");
    if (value && value === "true") {
      setauthenticated(true);
    } else {
      setauthenticated(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token-info");
    localStorage.removeItem("authenticated");
    setauthenticated(false);
  };

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <>
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <div className="hiddenLinks">
            <h1>Ecommerce Site </h1>
            <Link to="/"> Home </Link>
            <Link to="/contact"> Contact </Link>

            {authenticated ? (
              <a
                to="/"
                id="buttonlg"
                onClick={() => {
                  logout();
                }}
              >
                Logout{" "}
              </a>
            ) : (
              <Link to="/login" id="buttonlg">
                {" "}
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* <h1>Ecommerce Site </h1> */}
    </>
  );
};

export default Header;

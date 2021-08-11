import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../../context/ProductContext";
import classes from "./HeaderTop.module.css";

const HeaderTop = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { logout } = useContext(productContext);

  const checkAdmin = async () => {
    let data = await axios("http://localhost:8000/admin");
    let admin = data.data[0].isAdmin;
    setIsAdmin(admin);
  };
  checkAdmin();

  let loginData = {
    isAdmin: false,
  };

  return (
    <div className={classes.headerTop}>
      <div className="container-xxl">
        <div className={classes.headerTopInner}>
          <div className={classes.headerTopContacts}>
            <div className={classes.contactPhone}>
              <i className="fas fa-phone-alt"></i>
              +996-999-00-00-00
            </div>
            <div className={classes.contactEmail}>
              <i className="far fa-envelope"></i>
              email@email.com
            </div>
            <div className={classes.contactLocation}>
              <i className="fas fa-map-marker-alt"></i>
              Kyrgyzstan, Bishkek, Logvinenko 12
            </div>
          </div>
          <div className={classes.headerTopAccounts}>
            {isAdmin ? (
              <div
                className={classes.accountBalance}
                onClick={() => window.location.replace("add")}
              >
                ADMIN
              </div>
            ) : null}

            <div className={classes.accountBalance}>
              <i className="fas fa-dollar-sign"></i>
              USD
            </div>
            <div className={classes.accountProfile}>
              <i className="far fa-user"></i>
              {isAdmin ? (
                <Link to="/add" onClick={() => logout(loginData)}>
                  Выйти
                </Link>
              ) : (
                <Link to="/login">My Account</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

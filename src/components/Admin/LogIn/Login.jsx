import axios from "axios";
import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContext";
import classes from "./Login.module.css";

const Login = (props) => {
  const [trueName, truePassword] = ['Janbolot','12345']
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const {checkAdmin} = useContext(productContext)

  function loginClick() {
    if(trueName === name && truePassword === password){
      let loginData = {
        isAdmin: true
      }
    alert('Добро пожаловать ADMIN!')
    checkAdmin(loginData,props.history)
    }else{
      alert('Логин не найден!')
    }
  }

  

  return (
    <div className={classes.login}>
      <div className="container-xxl">
        <div className={classes.loginInner}>
          <div className={classes.loginTitle}>LogIn</div>
          <div class="input-group flex-nowrap mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div class="input-group flex-nowrap mb-4">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="addon-wrapping"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="button" class="btn btn-success" onClick={() => loginClick()}>
            Success
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

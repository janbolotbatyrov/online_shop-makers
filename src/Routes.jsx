import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import Login from "./components/Admin/LogIn/Login";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductsList from "./components/ProductsList/ProductsList";

const Routes = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const checkAdmin = async () => {
    let data = await axios("http://localhost:8000/admin");
    let admin = data.data[0].isAdmin;
    setIsAdmin(admin);
  };
  checkAdmin();
  return (
    <BrowserRouter>
      <Header />
      <NavMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={ProductsList} />
        {isAdmin ? <Route exact path="/add" component={Add} /> : null}
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/detail/:id" component={ProductDetail} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;

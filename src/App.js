import React from "react";
import { Switch, Route } from "react-router";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ListItemRegular from "./components/ListItemRegular";
import ListItemDisabled from "./components/ListItemDesabled";
import Login from "./components/Login";
import BottomNavBar from "./components/BottomNavBar";

export default function App() {
  return (
    <div className="container-app">
      {/* <NavBar /> */}
      {/* <Switch>
        <Route path="/">
        <Home />
        </Route>
      </Switch> */}
      {/* <Login />
      <ListItemRegular />
      <ListItemDisabled /> */}
      <Home />
      <BottomNavBar />
    </div>
  );
}

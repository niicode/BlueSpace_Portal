import React from "react";
import "./App.css";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Signup} exact />
        <Route path="/admin" component={Admin} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import {Router, Route, browserHistory} from "react-router";
import App from "../ui/App.jsx";
import About from "../ui/About.jsx";

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
    </Router>
);
import React from "react";
import {Router, Route, browserHistory} from "react-router";
import App from "../ui/App.jsx";
import About from "../ui/About.jsx";
import Game from "../ui/game/Game.jsx";
import WaitingForPlayers from "../ui/game/WaitingForPlayers.jsx";

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/waiting-for-players/:gameId" component={WaitingForPlayers}/>
        <Route path="/game/:gameId" component={Game}/>
    </Router>
);
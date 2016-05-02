import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import {Games} from "../api/games.js";
import WaitingForAnswer from "./game/WaitingForAnswer.jsx";
import WaitingForPlayers from "./game/WaitingForPlayers.jsx";
import Result from "./game/Result.jsx";
import JoinGame from "./game/JoinGame.jsx";
import Game from "./game/Game.jsx";

// App component - represents the whole app
class App extends Component {
    renderGame() {
        var currentGame = this.props.games[0];
        if (!currentGame) {
            // Just print all the things
            currentGame = {};
            return (
                <div>
                    <JoinGame/>
                    <WaitingForPlayers/>
                    <Game game={currentGame}/>
                    <WaitingForAnswer/>
                    <Result score="10" otherScore="8" winner="Me!"/>
                </div>
            )
        } else {
            return (
                <Game game={currentGame}/>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Master Debater</h1>
                </header>

                <div>
                    {this.renderGame()}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    games: PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('games');
    var games = Games.find({}).fetch();
    return {
        games: games
    };
}, App);
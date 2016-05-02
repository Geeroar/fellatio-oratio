import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import {Games} from "../api/games.js";
import JoinGame from "./game/JoinGame.jsx";

class App extends Component {
    render() {
        const runningGames = this.props.games.map((game) => (
            <li>A Game</li>
        ));
        return (
            <div className="container">
                <header>
                    <h1>Master Debater</h1>
                </header>

                <div>
                    <ul>
                        {runningGames}
                    </ul>
                    <JoinGame/>
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
import React, {Component, PropTypes} from "react";

export default class JoinGame extends Component {
    joinGame() {
        var game;
        console.log('Clicked Join Game');
        Meteor.call("joinGame", (err, result) => {
            game = result;
            Tracker.autorun(() => {
                Meteor.subscribe('active-game', game._id);
                console.log("After: " + JSON.stringify(game));
            });
        });
    }

    render() {
        return (
            <button onClick={this.joinGame.bind(this)}>Join Game</button>
        );
    }
}

JoinGame.propTypes = {};
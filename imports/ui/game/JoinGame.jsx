import React, {Component, PropTypes} from "react";
import {browserHistory} from "react-router";

export default class JoinGame extends Component {
    joinGame() {
        var game;
        console.log('Clicked Join Game');
        Meteor.call('joinGame', (err, result) => {
            var path = '';
            game = result;
            console.log(game);
            if (game.state === 'IN_PROGRESS') {
                path = `/game/${game._id}`;
            } else if (game.state = 'WAITING_FOR_START') {
                path = `/waiting-for-players/${game._id}`;
            } else {
                path = '/error';
            }

            browserHistory.push(path);
        });
    }

    render() {
        return (
            <button onClick={this.joinGame.bind(this)}>Join Game</button>
        );
    }
}

JoinGame.propTypes = {};
import React, {Component, PropTypes} from "react";
import {browserHistory} from "react-router";

export default class WaitingForPlayers extends Component {
    render() {
        const gameId = this.props.gameId;

        Meteor.call('getGame', gameId, (err, result) => {
            var currentGame = result;
            Tracker.autorun(() => {
                Meteor.subscribe('active-game', gameId);
                console.log('After: ' + JSON.stringify(currentGame));

                if (currentGame == 'IN_PROGRESS') {
                    const path = `/game/${gameId}`;
                    browserHistory.push(path);
                }
            });
        });

        return (
            <div className="container">
                <h1>Waiting for other players to join the game.....</h1>
            </div>
        );
    }
}

import React, {Component, PropTypes} from "react";

export default class Result extends Component {
    render() {
        return (
            <div>
                <p>The results are:</p>
                <ul>
                    <li>Your score: {this.props.score}</li>
                    <li>Your opponent's score: {this.props.otherScore}</li>
                </ul>
                <p>The winner is {this.props.winner}</p>
                <button>Join new game</button>
            </div>
        );
    }
}

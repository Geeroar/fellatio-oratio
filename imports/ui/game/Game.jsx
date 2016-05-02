import React, {Component, PropTypes} from "react";

export default class Game extends Component {
    render() {
        return (
            <div className="container">
                <p>Pick your answer motherfucker...</p>
                <select>
                    <option value="123">a: 1; b: 2; c: 3</option>
                    <option value="222">a: 2; b: 2; c: 2</option>
                    <option value="321">a: 3; b: 2; c: 1</option>
                </select>
                <button>Submit answer</button>
            </div>
        );
    }
}

Game.propTypes = {
    game: PropTypes.object.isRequired
};
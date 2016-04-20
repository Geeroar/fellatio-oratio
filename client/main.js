import {Template} from "meteor/templating";
import {ReactiveVar} from "meteor/reactive-var";
import "./main.html";
import {Game} from "./game";
import {Games} from "../api/games.js";

var game = {};
var gameData = {players: []};

Template.join.onCreated(function helloOnCreated() {
    game = new Game();
    var latestGameData = Games.findOne({}, {sort: {DateTime: -1, limit: 1}});
    if (!latestGameData) {
        gameData = Games.insert(gameData);
    } else {
        gameData = latestGameData;
    }
});

Template.join.helpers({
    game: gameData
});

Template.join.events({
    'click button'(event, instance) {
        if (!gameData.players) {
            gameData.players = [];
        }
        gameData.players.push({});
        Games.update(gameData._id, {
            $set: {players: gameData.players}
        });

    }
});

import {Template} from "meteor/templating";
import {ReactiveVar} from "meteor/reactive-var";
import "./main.html";
import {Game} from "./game";
import {Games} from "../api/games.js";

var game = {};

Meteor.startup(() => updatePageState(game));

Template.join.events({
    'click button'(event, instance) {
        console.log("Before: " + JSON.stringify(game));
        Meteor.call("joinGame", (err, result) => {
            game = result;
            Tracker.autorun(() => {
                Meteor.subscribe('active-game', game._id);
                console.log("After: " + JSON.stringify(game));
                updatePageState(game._id);
            });
        });
    }
});

updatePageState = gameId => {
    var game;
    if (gameId) {
        game = Games.findOne({_id: gameId});
    } else {
        game = {};
    }
    console.log(JSON.stringify(game));
    if (game.state == 'WAITING_FOR_START') {
        $('#waitingForStart').show();
        $('#game').hide();
        $('#waitingForAnswer').hide();
        $('#result').hide();
        $('#join').hide();
    } else if (game.state == 'IN_PROGRESS') {
        $('#waitingForStart').hide();
        $('#game').show();
        $('#waitingForAnswer').hide();
        $('#result').hide();
        $('#join').hide();
    } else if (game.state == 'WAITING_FOR_ANSWER') {
        $('#waitingForStart').hide();
        $('#game').hide();
        $('#waitingForAnswer').show();
        $('#result').hide();
        $('#join').hide();
    } else if (game.state == 'DONE') {
        $('#waitingForStart').hide();
        $('#game').hide();
        $('#waitingForAnswer').hide();
        $('#result').show();
        $('#join').hide();
    } else {
        $('#waitingForStart').hide();
        $('#game').hide();
        $('#waitingForAnswer').hide();
        $('#result').hide();
        $('#join').show();
    }
}

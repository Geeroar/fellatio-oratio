import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {Game} from "./game";

var game;

Meteor.startup(() => {
    game = new Game();
});

Meteor.methods({
    getGame: () => game
});

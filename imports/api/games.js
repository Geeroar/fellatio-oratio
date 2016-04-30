import {Mongo} from "meteor/mongo";

export const Games = new Mongo.Collection('games');

if (Meteor.isServer) {
    Meteor.publish('games', function tasksPublication() {
        return Games.find();
    });
}
import {Template} from "meteor/templating";
import {ReactiveVar} from "meteor/reactive-var";
import "./main.html";

var game;

Template.join.onCreated(function helloOnCreated() {
    game = Meteor.call('getGame');
});

Template.join.helpers({

});

Template.join.events({
  'click button'(event, instance) {
      // game.addPlayer({});
  }
});

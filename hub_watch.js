Projects = new Meteor.Collection("projects");

if (Meteor.isClient) {

  Template.hello.projects = function () {
    return Projects.find()
  }

  Template.hello.events({
    'keydown #new-project': function (event) {
      if (event.keyCode == 13 && event.target.value) {
        Projects.insert({name: event.target.value})
        event.target.value = ''
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

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
    },
    'mouseenter #projectList li': function (event) {
      $(event.target).find('i').removeClass('hide')
    },
    'mouseleave #projectList li': function (event) {
      $(event.target).find('i').addClass('hide')
    },
    'click #projectList li i.icon-cancel': function (event) {
      Projects.remove(this._id)
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Template.projects.projects = function () {
  return Projects.find()
};

Template.projects.active = function () {
  return (Session.equals("currentProject", this._id)) ? 'active' : '';
};

Template.projects.events({
  'keydown #new-project': function (event) {
    if (event.keyCode == 13 && event.target.value) {

      var eventsUrl = "https://api.github.com/repos/" + event.target.value + "/events"
      Meteor.http.get(eventsUrl, function (err, res) {
        var project_id = Projects.insert({
          name: event.target.value,
          etag: res.headers.etag
        });

        _.each(res.data, function (ghEvent) {
          ghEvent["project_id"] = project_id;
          Events.insert(ghEvent)
        });

        event.target.value = ''
      });
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
  },
  'click #projectList li .projectSelect': function (event) {
    Session.set("currentProject", this._id)
  }
});

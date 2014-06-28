Template.project_events.currentProjectEvents = function () {
  var project_id = Session.get("currentProject");
  return Events.find({project_id: project_id}).fetch()
};


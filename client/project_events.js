Template.project_events.helpers({
  currentProjectEvents: function () {
    var project_id = Session.get("currentProject");
    return Events.find({project_id: project_id}).fetch()
  },
  eventTemplate: function () {
    if(this.type == "IssuesEvent" &&
      this.payload.action == "opened") {
      return Template["issue_open"];
    } else if(this.type == "PushEvent") {
      return Template["push"];
    } else {
      return Template["common_event"]
    }
  }
});

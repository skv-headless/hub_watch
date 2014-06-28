Template.push.helpers({
  branch: function () {
    return this.payload.ref.split('/').slice(-1)[0]
  },
  commitUrl: function () {
    //TODO make global variable
    var github = 'http://github.com';
    return [github, this.repo.name, 'commit', this.payload.head].join('/');
  }
});

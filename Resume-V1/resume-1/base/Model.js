window.Model = function (options) {
  let resourceName = options.resourceName
  return {
    initAV: function() {
      var { Query, User } = AV;
      // AV.init('appId', 'appKey');

      var APP_ID = 'gdp7vSppEKKm14mL6XkC2vGx-gzGzoHsz';
      var APP_KEY = 'vlS29qhJ2EJBdjDyOzUciMHH';

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function () {
      var query = AV.Object.createWithoutData(resourceName)
      return query.fetch()
    },
    save: function (resource) {
      let X = AV.Object.extend(resourceName);
      let x= new X();
      return x.save(resource)
    },
  }
}

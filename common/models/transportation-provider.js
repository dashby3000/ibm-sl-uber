module.exports = function(TransportationProvider) {

  TransportationProvider.afterRemote('prototype.__create__Driver', function (ctx, driver, next) {
    var Driver = TransportationProvider.app.models.Driver;
    var Role = TransportationProvider.app.models.Role;
    var RoleMapping = TransportationProvider.app.models.RoleMapping;

    Role.find({where: {name: 'DRIVER'}}, function (err, role) {
      if (err) {
        return next(err);
      }

      role[0].principals.create({
        principalType: RoleMapping.USER,
        principalId: driver.id
      }, function (err, principal) {
        if (err) {
          return next(err);
        }
      });
    });
  });
};

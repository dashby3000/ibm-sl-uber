module.exports = function(Driver) {
  /*
  Driver.disableRemoteMethod('create', true);
  Driver.disableRemoteMethod('find', true);
  Driver.disableRemoteMethod('upsert', true);
  Driver.disableRemoteMethod('exists', true);
  Driver.disableRemoteMethod('findById', true);
  Driver.disableRemoteMethod('deleteById', true);
  Driver.disableRemoteMethod('createChangeStream', true);
  Driver.disableRemoteMethod('count', true);
  Driver.disableRemoteMethod('updateAll', true);
  Driver.disableRemoteMethod('findOne', true);
  Driver.disableRemoteMethod('updateAttributes', false);
  */

  Driver.disableRemoteMethod('__delete__tripRequests', false);
  Driver.disableRemoteMethod('__destroyById__tripRequests', false);

  Driver.disableRemoteMethod('__create__vehicles', false);
  Driver.disableRemoteMethod('__destroy__vehicles', false);
};

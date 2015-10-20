module.exports = function(Passenger) {

  Passenger.afterRemote('prototype.__create__TripRequest', function (ctx, user, next) {
    var tripRequest = ctx.result;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var hh = today.getHours();
    var min = today.getMinutes();
    var yy = String(today.getFullYear()).substr(2);
    var lastFour = String(tripRequest.id).substr(String(tripRequest.id).length - 4);

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    if (hh < 10) {
      hh = '0' + hh;
    }

    if (min < 10) {
      min = 0 + min;
    }

    var humanReadableId = 'ICR' + mm + dd + yy + hh + min + lastFour;

    tripRequest.updateAttribute('human_readable_id', humanReadableId.toUpperCase(), function (err, updatedTripRequest) {
      if (err) {
        return next(err);
      }

      next();

    });
  });
};

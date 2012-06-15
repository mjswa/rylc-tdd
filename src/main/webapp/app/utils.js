(function (global) {

  function parseSimpleDate(dateAsString) {
    if (!dateAsString) {
      return undefined;
    }
    var parts = dateAsString.split('.');
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  function formatSimpleDate(date) {
    if (!date) {
      return undefined;
    }
    var month = String(date.getMonth() + 1);
    if (month.length == 1) {
      month = "0" + month;
    }
    var day = String(date.getDate());
    if (day.length == 1) {
      day = "0" + day;
    }
    return day + "." + month + "." + date.getFullYear();
  }

  function validateSimpleDate(dateAsString) {
    var simpleDateRegex = /^\d\d?\.\d\d?\.\d\d(\d\d)?$/;
    return dateAsString && dateAsString.match(simpleDateRegex);
  }

  function dayCount(startDate, endDate) {
    return 1 + (endDate - startDate) / 1000 / 60 / 60 / 24;
  }

  window.utils = {
    parseSimpleDate:parseSimpleDate,
    formatSimpleDate:formatSimpleDate,
    validateSimpleDate:validateSimpleDate,
    dayCount:dayCount
  };

})(window);
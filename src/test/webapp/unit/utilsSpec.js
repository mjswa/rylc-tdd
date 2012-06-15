describe("utilsService", function () {

  describe("parseSimpleDate", function () {
    it("should return expected date for valide date string", function () {
      var dateAsString = "25.05.2011";
      var expectedDate = new Date(2011, 5 - 1, 25);
      expect(expectedDate).toEqual(utils.parseSimpleDate(dateAsString));
    });

    it("should return undefined if parameter is falsy", function () {
      expect(utils.parseSimpleDate(undefined)).toBeUndefined();
      expect(utils.parseSimpleDate(null)).toBeUndefined();
      expect(utils.parseSimpleDate("")).toBeUndefined();
    });
  });

  describe("formatSimpleDate", function () {
    it("should return undefined if date is falsy", function () {
      expect(utils.formatSimpleDate(undefined)).toBeUndefined();
      expect(utils.formatSimpleDate(null)).toBeUndefined();
    });

    it("should return well formatted date as String", function () {
      var dateToBeFormatted = new Date(2010, 4, 5);
      var expectedString = "05.05.2010";
      expect(expectedString).toEqual(utils.formatSimpleDate(dateToBeFormatted));
      dateToBeFormatted = new Date(2010, 11, 11);
      expectedString = "11.12.2010";
      expect(expectedString).toEqual(utils.formatSimpleDate(dateToBeFormatted));
    });
  });

  describe("validateSimpleDate", function () {
    it("should return truthy if date format matches", function () {
      expect(utils.validateSimpleDate("25.05.2011")).toBeTruthy();
    });

    it("should return falsy if date format does not match", function () {
      expect(utils.validateSimpleDate("2010/13/30")).toBeFalsy();
    });
  });

  describe("dayCount", function () {
    it("should return expected count", function () {
      var startDate = new Date(2011, 1, 1);
      var endDate = new Date(2011, 1, 11);
      expect(utils.dayCount(startDate, endDate)).toEqual(11);
    });
  });

});

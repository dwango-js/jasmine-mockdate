describe('MockDate', function() {
  var MockDate = jasmineMockDate.MockDate;

  it('should be an instance of Date', function() {
    expect(new MockDate()).toEqual(jasmine.any(Date));
  });

  it('should be able to set a timestamp', function() {
    expect(new MockDate(1000).getTime()).toEqual(new Date(1000).getTime());
  });

  it('should be able to set a date', function() {
    var date = new Date();
    expect(new MockDate(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ).getTime()).toEqual(date.getTime());
  });

  describe('.toString', function() {
    it('should return a date string', function() {
      expect(MockDate.toString()).toEqual(Date.toString());
    });
  });

  describe('.parse', function() {
    it('should return a timestamp', function() {
      var dateString = new Date().toString();
      expect(MockDate.parse(dateString)).toEqual(Date.parse(dateString));
    });
  });

  describe('.UTC', function() {
    it('should return a timestamp', function() {
      var date = new Date();
      expect(MockDate.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      )).toEqual(Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      ));
    });
  });
});

describe('jasmineMockDate', function() {
  beforeEach(function() {
    expect(jasmineMockDate.isInstalled()).toBe(false);

    jasmine.Clock.useMock();
    jasmine.Clock.useMockDate();
  });

  it('should be mocked', function() {
    var now = new Date().getTime();
    expect(now).toBeGreaterThan(0);
    expect(new Date().getTime()).toEqual(now);
  });

  it('should set a clock ahead with tick()', function() {
    var now = new Date().getTime();

    jasmine.Clock.tick(50);
    expect(new Date().getTime()).toEqual(now + 50);

    jasmine.Clock.tick(101);
    expect(new Date().getTime()).toEqual(now + 151);
  });

  it('should call setTimeout at small intervals', function() {
    var now = new Date().getTime();
    var time;

    setTimeout(function() {
      time = new Date().getTime();
    }, 100);

    jasmine.Clock.tick(1000);

    expect(time).toBeGreaterThan(now + 99);
    expect(time).toBeLessThan(now + 200);
  });

  if (Date.now) {
    describe('Date.now', function() {
      it('should return a mocked time', function() {
        var now = Date.now();
        jasmine.Clock.tick(50);
        expect(Date.now()).toEqual(now + 50);
      });
    });
  }
});

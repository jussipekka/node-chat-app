const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(1);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = '     ';
    expect(isRealString(str)).toBeFalsy();
  });

  it('should allow strings with non-space characters', () => {
    var str = '   Name    ';
    expect(isRealString(str)).toBeTruthy();
  });

});
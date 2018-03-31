var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'JP';
    var text = 'Haista kukkanen';
    var message = generateMessage(from, text);
    
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'JP';
    var latitude = 60.4317717;
    var longitude = 22.1739878;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage).toInclude({from, url});
    expect(locationMessage.createdAt).toBeA('number');
    
  });
});
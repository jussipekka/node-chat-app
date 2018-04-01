const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike', 
      room: 'Node course'
    }, {
      id: '2',
      name: 'Jean', 
      room: 'React course'
    }, {  
      id: '3',
      name: 'Julie', 
      room: 'Node course'
    }];
  });
  
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'JP',
      room: 'Apuva'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);

  });

  it('should return names for Node course', () => {
    var userList = users.getUserList('Node course');
    
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for React course', () => {
    var userList = users.getUserList('React course');
    
    expect(userList).toEqual(['Jean']);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
    // expect(userList).toExclude({id: '1', name: 'Mike', room: 'Node course'});
    // expect(Object.keys(userList.users).length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '1';
    var user = users.getUser(userId);
   
    
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId  = '4';
    var user = users.getUser(userId);
    
    expect(user).toNotExist();
    
  });
});
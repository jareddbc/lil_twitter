User = function(attributes){
  this.attributes = attributes;
};


User.create = function(attributes){
  return $.post('/users', {user: attributes}).then(function(attributes){
    return new User(attributes);
  });
}
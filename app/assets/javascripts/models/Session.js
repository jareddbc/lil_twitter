Session = {
  data: {}
};

$.extend(Session, EventEmitter.prototype);

Session.load = function(){
  return $.getJSON('/session').then(Session.update);
};

Session.login = function(params){
  return $.post('/session', params).then(Session.update);
};

Session.logout = function(){
  return $.ajax({url:'/session', method:'DELETE'}).then(Session.update);
}

Session.update = function(session){
  Session.data = session;
  Session.emit('change', session);
}
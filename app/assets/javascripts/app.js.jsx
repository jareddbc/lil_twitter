// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


App = {};

App.start = function(){
  var node = React.createElement(this.component);
  React.render(node, document.body);
};

App.component = React.createClass({

  getInitialState: function(){
    return {
      loggedIn: false
    }
  },

  render: function(){
    if (this.state.loggedIn){
      return (
        <div className="layout">
          <Navbar />
        </div>
      );
    }else{
      return (
        <div className="layout">
          <LoginOrSignup />
        </div>
      );
    }
  }
})



App.signup = function(attributes){
  User.create(attributes).then(function(user){
    debugger;
  });
}
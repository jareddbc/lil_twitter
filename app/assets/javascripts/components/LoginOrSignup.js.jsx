LoginOrSignup = React.createClass({
  onSignup: function(event){
    event.preventDefault();
    var attributes = {
      name:     this.refs.name.getDOMNode().value,
      email:    this.refs.email.getDOMNode().value,
      password: this.refs.password.getDOMNode().value,
    };
    App.signup(attributes)
  },

  render: function(){
    return (
      <div className="LoginOrSignup">
        <form onSubmit={this.onSignup}>
          <div>
            <input type="text" ref="name" placeholder="name" />
          </div>
          <div>
            <input type="email" ref="email" placeholder="email" />
          </div>
          <div>
            <input type="password" ref="password" placeholder="password" />
          </div>
          <div>
            <input type="submit" value="Signup" />
          </div>
        </form>
      </div>
    );
  }
})

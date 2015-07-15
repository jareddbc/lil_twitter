LogoutButton = React.createClass({
  logout: function(event){
    event.preventDefault();
    Session.logout();
  },
  render: function(){
    return (
      <a href="" onClick={this.logout}>{this.props.children}</a>
    );
  }
})

UserControlsDropdown = React.createClass({

  getInitialState: function(){
    return {
      open: false,
    };
  },

  onClick: function(event){
    event.preventDefault();
    this.toggle();
  },

  toggle: function(){
    this.setState({open: !this.state.open});
  },

  componentDidMount: function(){
    $(document).on('click', this.close);
  },

  componentWillUnmount: function(){
    $(document).off('click', this.close);
  },

  close: function(event){
    var clickedElement = $(event.target);
    var ourNode = $(this.getDOMNode());
    if (clickedElement.parents().is(ourNode)) return;
    this.setState({open: false});
  },

  render: function(){
    var style = {
      display: (this.state.open ? 'block' : 'none')
    };
    return (
      <div className="UserControlsDropdown">
        <a href="" onClick={this.onClick}>User Controls ›</a>
        <div className="UserControlsDropdown-contents" style={style}>
          <a href="/settings">Settings</a>
          <a href="/logout">Logout</a>
        </div>
      </div>
    );
  }
})

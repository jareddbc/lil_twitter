LoginButton = React.createClass({

  propTypes: {
    size: React.PropTypes.oneOf(['small', 'medium', 'large']),
  },

  render: function(){
    var className = this.props.className+" LoginButton LoginButton-"+this.props.size;
    return (
      <button className={className}>{this.props.children}</button>
    );
  }
})

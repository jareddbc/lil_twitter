// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


App = {};

App.start = function(){
  var node = React.createElement(this.component);
  React.render(node, document.body);
};

App.component = React.createClass({
  render: function(){
    return (
      <div className="var">
        <div>hello asdsdad</div>
      </div>
    );
  }
})
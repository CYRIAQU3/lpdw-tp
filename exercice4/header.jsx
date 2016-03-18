var App = React.createClass({
		  render: function () {
		    return React.createElement('header', {className: "header"},
        "The Header"
      );
		  }
		});

		React.render(<App name="TP" />, document.getElementById('root'));
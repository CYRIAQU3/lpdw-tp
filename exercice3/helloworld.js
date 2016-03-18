var HW = React.createClass({
		  render: function () {
		    return <h1>Welcome {this.props.nname} on {this.props.land}</h1>;
		  }
		});

		React.render(<HW nname="Gandalf" land="The Middle Earth" />, document.getElementById('root'));
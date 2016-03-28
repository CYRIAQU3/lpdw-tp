import React    from 'react-dom';
import ReactDOM from 'react-dom';
import YourApp  from './components/YourApp';

ReactDOM.render(
  <YourApp />,
  document.getElementById('root')
);

var ip = React.createClass({
		  render: function() {
		    return <input type="text"
		    value={this.state.value}
        	onChange=dv.setState({val: {this.state.value}}); />;
		  }
		});


var dv = React.createClass({
		  render: function () {
		    return <div id="{this.props.name}">{this.props.val}</div>;
		  }
		});

		React.render(<dv name="container_div" val="" />, document.getElementById('root'));
		React.render(<ip />, document.getElementById('root'));

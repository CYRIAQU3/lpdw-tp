import React    from 'react-dom';
import ReactDOM from 'react-dom';
import YourApp  from './components/YourApp';

var IP = React.createClass({
  getInitialState: function() {
    return {value: 'Hello world'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.value});
  }
  render: function() {
    return (
      <div className="ip">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
        />
      </div>
    );
  }
});

ReactDOM.render(<IP />, mountNode);

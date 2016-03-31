import React    from 'react-dom';
import ReactDOM from 'react-dom';
import YourApp  from './components/YourApp';

var TodoList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <li class="{item.class}" onclick="this.class='bar'" key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [
    {
        label: 'Faire la vaisselle',
        class: ""
    },
    {
        label: 'Aller chercher le pain',
        class: ""
    },
    {
        label:'Acheter des fleurs pour sa/son bien aimé(e)',
        class: ""
    }
], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
      </div>
    );
  }
});

ReactDOM.render(<TodoApp />, mountNode);

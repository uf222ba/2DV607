var React = require('react');

var NameListItem = React.createClass({
    render: function() {
        return <li>{this.props.text}</li>
    }
});

module.exports = NameListItem;

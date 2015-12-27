var React = require('react');

var ContentArea = React.createClass({
    render: function() {
        return <div className="output">
            <p>{this.props.content}</p>
            <p>{this.props.length} is used and {this.props.remaining} characters remaining</p>
        </div>;
    }
});

module.exports = ContentArea;

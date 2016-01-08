var React = require('react');

var ContentArea = React.createClass({
    render: function() {
    	var len = this.props.length,
    		rem = this.props.remaining;
        return <div className="output">
            <p>{this.props.content}</p>
            <p>{len} character{len===1 ? ' is' : 's are'} used and {rem} remain{rem===1 ? 's' : null}</p>
        </div>;
    }
});

module.exports = ContentArea;

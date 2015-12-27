var React = require('react'),
    NameListItem = require('./namelistitem');

var NameList = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.items.map(function(item) {
                    return <NameListItem key={item.id} text={item.content}/>;
                })}
            </ul>
        );
    }
});

module.exports = NameList;

var React = require('react'),
    ContentArea = require('./contentarea'),
    NameList = require('./namelist'),
    Banner = require('./banner');

var DogNameApp = React.createClass({
    getInitialState: function() {
        return {
            hasContent: false,
            content: '',
            hasLength: 0,
            remaining: 35,
            items: []
        }
    },
    changeHandler: function(e) {
        this.setState({content: e.target.value.substr(0, 34)});
        this.setState({hasContent: this.state.content !== ''});
        this.setState({hasLength: e.target.value.length});
        this.setState({value: e.target.value.substr(0, 34)});
        this.setState({remaining: 35 - e.target.value.length});
    },
    submitHandler: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{content: this.state.content, id: Date.now()}]);
        var nextText = '';
        this.setState({items: nextItems, content: nextText});
    },
    render: function() {
        var value = this.state.value;
        return <div className={this.state.hasContent ? 'active input-wrap' : 'inactive input-wrap'}>
            <Banner />
            <form onSubmit={this.submitHandler}>
                <input className="input" type="text" value={value} onChange={this.changeHandler} />
                <button>{'Add name to list'}</button>
            </form>
            <ContentArea content={this.state.content} length={this.state.hasLength} remaining={this.state.remaining} />
            <NameList items={this.state.items} />
        </div>;
    }
});

module.exports = DogNameApp;
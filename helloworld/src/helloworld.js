var App = React.createClass({
    getInitialState: function () {
        return {
            name: "Hello world of React"
        }
    },

    render: function () {
        return (
            //<div>{this.state.message}</div>
            <div>Hello world of React!</div>
        )
    }
})

React.render(<App/>, document.getElementById("app"));
var React = require('react');

var Paragraph = React.createClass({
    render: function () {
        return (
            <p className="paragraph">{this.props.data}</p>
        );
    }
});

module.exports = Paragraph;
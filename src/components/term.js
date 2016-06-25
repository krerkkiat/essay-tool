var React = require('react');
var classNames = require('classnames');

var Term = React.createClass({
    handleOnClick: function (e) {
        window.open('http://www.learnersdictionary.com/definition/' + escape(e.target.textContent));
    },
    render: function () {
        var highlighting = this.props.highlighting;

        var className = classNames({
            'term': true,
            'hilight': this.props.term.pos[highlighting]
        });

        return (
            <span onClick={this.handleOnClick} className={className}>{this.props.term.text}</span>
        );
    }
});

module.exports = Term;
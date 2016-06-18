var React = require('react');

var Sentence = React.createClass({
    render: function () {
        return (
            <div className="sentence">
                <span>{this.props.data.str}</span>
                <span className="paragraph-number">&para;{this.props.paragraph + 1}</span>
            </div>
        );
    }
});

module.exports = Sentence;
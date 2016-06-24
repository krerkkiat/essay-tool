var React = require('react');

var Sentence = React.createClass({
    render: function () {
        return (
            <div className="sentence">
                <p className="paragraph-number">&para; {this.props.paragraph + 1}</p>
                <p className="content">{this.props.data.str}</p>
            </div>
        );
    }
});

module.exports = Sentence;
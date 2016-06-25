var React = require('react');

var Term = require('./term');

var Sentence = React.createClass({
    render: function () {
        var termNodes = this.props.sentence.terms.map(function (current, idx) {
            return (
                <Term
                    key={idx}
                    term={current}
                    highlighting={this.props.highlighting}
                />
            );
        }, this);

        return (
            <div className="sentence">
                <p className="paragraph-number">&para; {this.props.paragraph + 1}</p>
                <p className="content">{termNodes}</p>
            </div>
        );
    }
});

module.exports = Sentence;
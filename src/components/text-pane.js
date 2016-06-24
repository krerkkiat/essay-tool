var React = require('react');
var classNames = require('classnames');

var TextPane = React.createClass({
    render: function () {
        var className = classNames({
            'tab-pane': true,
            'active': this.props.activeTabId == 'text'
        });

        return (
            <div id="text-pane" className={className}>
                <h2>Text</h2>
                <textarea
                    onChange={this.props.onTextChange}
                    value={this.props.text} placeholder="Type or paste your text here..." rows="5"></textarea>
                <input type="button" onClick={this.props.onFinishEntering} value="Process text"></input>
            </div>
        );
    }
});

module.exports = TextPane;
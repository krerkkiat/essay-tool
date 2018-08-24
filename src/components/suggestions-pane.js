var React = require('react');
var classNames = require('classnames');

var SuggestionsPane = React.createClass({
    render: function () {
        var className = classNames({
            'tab-pane': true,
            'active': this.props.activeTabId == 'suggestions'
        });

        return (
            <div id="suggestions-pane" className={className}>
                <h2>Suggestions</h2>
                
            </div>
        );
    }
});

module.exports = SuggestionsPane;
var React = require('react');
var classNames = require('classnames');

var Tabs = React.createClass({
    render: function () {
        var classes = [
            classNames({ 'active':  this.props.activeTabId == 'text' }),
            classNames({ 'active':  this.props.activeTabId == 'sentences' }),
            classNames({ 'active':  this.props.activeTabId == 'speed-reading' }),
            classNames({ 'active':  this.props.activeTabId == 'about' })
        ];
        
        return (
            <ul className="tabs">
                <li onClick={this.props.onClickTab} className={classes[0]}><a id="text" href="#">Text</a></li>
                <li onClick={this.props.onClickTab} className={classes[1]}><a id="sentences" href="#">Sentences</a></li>
                <li onClick={this.props.onClickTab} className={classes[2]}><a id="speed-reading" href="#">Speed Reading</a></li>
                <li onClick={this.props.onClickTab} className={classes[3]}><a id="about" href="#">About</a></li>
            </ul>
        );
    }
});

module.exports = Tabs;
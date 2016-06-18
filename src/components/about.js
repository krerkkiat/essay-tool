var React = require('react');
var classNames = require('classnames');

var About = React.createClass({
    render: function () {
        var className = classNames({
            'tab-pane': true,
            'active': this.props.activeTabId == 'about'
        });

        return (
            <div id="about-pane" className={className}>
                <h2>About</h2>
                <p>This is a web application that tries to facilitate proof reading.</p>
                <h3>Acknowledgements</h3>
                <p>This application is powered by <a href="https://facebook.github.io/react/index.html" target="_blank">React.js</a>, <a href="https://github.com/nlp-compromise/nlp_compromise" target="_blank">nlp_compromise</a>, <a href="https://github.com/JedWatson/classnames" target="_blank">classNames</a>, <a href="https://github.com/twitter-fabric/velocity-react" target="_blank">velocity-react</a>, and <a href="https://bost.ocks.org/mike/shuffle/" target="_blank">Array Shuffle code by Mike Bostock</a></p>
            </div>
        );
    }
});

module.exports = About;
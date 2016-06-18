var React = require('react');
var classNames = require('classnames');
require('velocity-animate');
require('velocity-animate/velocity.ui');
var VelocityComponent = require('velocity-react/velocity-component');

var Paragraph = require('./paragraph');

var SpeedReadingPane = React.createClass({
    getInitialState: function () {
        return {
            rate: 600,
            duration: 0
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            duration: nextProps.wordCount * ( 1 / (this.state.rate / (60 * 1000) ) )
        });
    },
    animate: function (e) {
        this.refs.scrollingSection.runAnimation();
    },
    handleOnChange: function (e) {
        var rate = parseInt(e.target.value);
        if (rate == 0) {
            rate = 1;
        }

        this.setState({
            rate: rate,
            duration: this.props.wordCount * ( 1 / (rate / (60 * 1000)) )
        });
    },
    render: function () {
        var className = classNames({
            'tab-pane': true,
            'active': this.props.activeTabId == 'speed-reading'
        });

        var nodes = this.props.text.split('\n').map(function (current, idx) {
            return <Paragraph key={idx} data={current} />
        });

        if (this.props.text == "") {
            nodes = (<div>
                <h4>No text found, please try to enter or paste some text.</h4>
            </div>);
        }

        return (
            <div id="speed-reading-pane" className={className}>
                <h2>Speed Reading</h2>
                <span>Words/minute: </span> <input onChange={this.handleOnChange} value={this.state.rate} type="number"></input> <input type="button" onClick={this.animate} value="Start"></input>
                <VelocityComponent
                    ref="scrollingSection"
                    animation={"scroll"}
                    duration={this.state.duration}
                    delay={1000}
                    easing={"linear"}
                    mobileHA={false}
                    targetQuerySelector="div #bottom-mark">
                    <div>
                        {nodes}
                        <div id="bottom-mark"></div>
                    </div>
                </VelocityComponent>
            </div>
        );
    }
});

module.exports = SpeedReadingPane;
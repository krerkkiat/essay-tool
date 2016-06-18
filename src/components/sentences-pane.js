var React = require('react');
var classNames = require('classnames');

var Sentence = require('./sentence');

var SentencesPane = React.createClass({
    render: function () {
        var className = classNames({
            'tab-pane': true,
            'active': this.props.activeTabId == 'sentences'
        });

        var sentenceNodes = this.props.sentences.map(function (current, idx, array) {
            return <Sentence key={current.id} data={current.data} paragraph={current.paragraph}/>;
        });

        if (this.props.sentences.length == 0) {
            sentenceNodes = (<div>
                <h4>No text found, please try to enter or paste some text.</h4>
            </div>);
        }

        return (
            <div id="sentences-pane" className={className}>
                <h2>Sentences</h2>
                <div className="sentences-options">
                    <p>Ordering options : </p>
                    <ul className="ordering-options">
                        <li><input onClick={this.props.onClickNormal} type="button" value="Normal"></input></li>
                        <li><input onClick={this.props.onClickReverse} type="button" value="Reverse"></input></li>
                        <li><input onClick={this.props.onClickShuffle} type="button" value="Shuffle"></input></li>
                    </ul>
                </div>
                <div className="sentences-list">
                    {sentenceNodes}
                </div>
            </div>
        );
    }
});

module.exports = SentencesPane;
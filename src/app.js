var React = require('react');
var nlp = require('nlp_compromise');
var classNames = require('classnames');

var Tabs = require('./components/tabs');
var TextPane = require('./components/text-pane');
var SentencesPane = require('./components/sentences-pane');
var SpeedReadingPane = require('./components/speed-reading-pane');
var About = require('./components/about');

/* Shuffle Code from: https://bost.ocks.org/mike/shuffle/ */
var shuffle = function (array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element...
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

var App = React.createClass({
    getInitialState: function () {
        return {
            text: "",
            wordCount: 0,
            sentences: [],
            activeTabId: "text",
            highlighting: "none"
        };
    },
    handleOnTextChange: function (e) {
        this.setState({ text: e.target.value });
    },
    handleOnFinishEntering: function () {
        var paragraphs = this.state.text.split('\n').map(function (current) {
            return nlp.text(current).sentences;
        });

        var maxSentences = Math.max.apply(null, paragraphs.map(function (current) {
            return current.length;
        }));

        var sentences = [];
        for (var i = 0; i < paragraphs.length; i++) {
            sentences = sentences.concat(paragraphs[i].map(function (current, idx, array) {
                return { id: (i * maxSentences) + idx, paragraph: i, idx: idx, data: current };
            }));
        }
        
        this.setState({
            sentences: sentences,
            wordCount: this.state.text.split(' ').length
        });
    },
    handleOnClickTab: function (e) {
        var id = "";
        if (e.target.tagName == "A") {
            id = e.target.id;
        } else if (e.target.tagName == "LI") {
            id = e.target.children[0].id;
        }

        if (id == this.state.activeTabId) {
            return;
        }

        this.setState({ activeTabId: id });
    },

    handleOnClickNormal: function (e) {
        var temp = this.state.sentences.sort(function (a, b) {
            return a.id - b.id;
        });

        this.setState({ sentences: temp });
    },
    handleOnClickReverse: function (e) {
        this.setState({
            sentences: this.state.sentences.reverse()
        });
    },
    handleOnClickShuffle: function (e) {
        var temp = shuffle(this.state.sentences);
        this.setState({ sentences: temp });
    },

    handleOnClickHighlighting: function (e) {
        this.setState({
            highlighting: e.target.value
        });
    },
    render: function () {
        return (
            <div id="app">
                <Tabs onClickTab={this.handleOnClickTab} activeTabId={this.state.activeTabId}/>
                <div className="tab-content">
                    <TextPane
                        onTextChange={this.handleOnTextChange}
                        onFinishEntering={this.handleOnFinishEntering}

                        text={this.state.text}
                        activeTabId={this.state.activeTabId} />
                    <SentencesPane 
                        onClickNormal={this.handleOnClickNormal}
                        onClickReverse={this.handleOnClickReverse}
                        onClickShuffle={this.handleOnClickShuffle}
                        onClickHighlighting={this.handleOnClickHighlighting}

                        text={this.state.text}
                        sentences={this.state.sentences}
                        highlighting={this.state.highlighting}
                        activeTabId={this.state.activeTabId} />
                    <SpeedReadingPane
                        text={this.state.text}
                        sentences={this.state.sentences}
                        wordCount={this.state.wordCount}
                        activeTabId={this.state.activeTabId} />
                    <About
                        activeTabId={this.state.activeTabId} />
                </div>
            </div>
        );
    }
});

module.exports = App;
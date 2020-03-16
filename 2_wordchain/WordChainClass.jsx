const React = require('react');
const { Component } = React;

class WordChainClass extends Component {
    state = {
        word: 'スタート',
        value: '',
        result: '',
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                word: this.state.value,
                value: '',
                result: 'オッケー',
            });
        } else {
            this.setState({
                value: '',
                result: '違う言葉にしてね！',
            });
        }
        this.input0.focus();
    };

    onChangeInput = (e) => {
        this.setState({value: e.target.value})
    };

    input0;

    onRefInput = (e) => {
        this.input0 = e;
    };

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button >次!!!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordChainClass;

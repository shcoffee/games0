const React = require('react');
const { Component } = React;

class GuGuDanClass extends Component {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState((prevState) => {
                return {
                    result: '正解は' + prevState.value,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: '',
                };
            })
            /*
            this.setState({
                result: '正解は' + this.state.value,
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: '',
            });
            */
        } else {   
            this.setState({                                                 
                result: '不正解！',
                value: '',
            });
        }
        this.input1.focus();
    };

    onChange = (e) => {
        this.setState({value: e.target.value});
    };

    input1;
    onRefInput = (e) => {this.input1 = e; }

    render(){
        console.log('rendering!');
        return (
            <React.Fragment>
                <div>{this.state.first}かける{this.state.second}は？</div>    
                <form　onSubmit={this.onSubmit} >
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange} />    
                    <button>答え入力してクリック</button>
                </form>
                <div>結果：{this.state.result}</div>
            </React.Fragment>
        );
    }
}

module.exports = GuGuDanClass;
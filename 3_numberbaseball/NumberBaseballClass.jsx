import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    console.log('answer:'+array);
    return array;
}

class NumberBasecallClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 'Start!',
            value: '',
            answer: getNumbers(),
            tries: [],
        };
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }


    onSubmitForm(e) {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')) {
            this.setState({
                result: 'Homerun!',
                answer: getNumbers(),
                value: '',
                tries: [],
            });
        } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `Fail..Answer is ${this.state.answer.join(',')}`,
                    answer: getNumbers(),
                    value: '',
                    tries: [],
                });

            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, { try: this.state.value, result: `${strike}strike, ${ball}ball... try again`}],
                    value: '',
                })
            }
        }
    };

    onChangeInput(e) {
        this.setState({
            value: e.target.value,
        });
    };

    render() { 
        return (  
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>トライ数：{this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v,i) => {
                        return (
                            <Try key={`${i + 1}:`} tryInfo={v} />
                        );
                    })}
                    
                </ul>
            </>
        );
    }
}



//ES2015文法なら
//babel使ってるからOK。
//export const test = "test"; // -> import {test} from xxx, 複数可能
export default NumberBasecallClass; // -> import NumberBasecallClass from xxx, 一つだけ
//ES2015

//nodeモジュルなら(commonjs)
//nodeはこれだけ可能。
//webpackはnodeで実行されるから、こっち(const)を使用するように！
//const React = require('react');
//exports.test = "test";
//module.exports = NumberBasecallClass;
//node
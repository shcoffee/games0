const React = require('react');
const { useState, useRef } = React;

const WordChain = () => {
    const [word, setWord] = useState('３２１スタート');
    const [value, setVaule] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setWord(value);
            setVaule('');
            setResult('オッケー');
        } else {
            setVaule('');
            setResult('違う言葉にしてね！');
        }
        inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setVaule(e.target.value);
    };
   
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button >次!!!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordChain;

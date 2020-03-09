const React = require('react');

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('正解は' + value);  
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        } else { 
            setResult('不正解！');
            setValue('');
        }
        inputRef.current.focus();
    };

    console.log('rendering!');
    return (
        <React.Fragment>
            <div>{first}かける{second}は？</div>
            <form onSubmit={onSubmitForm} >
                <input type="number" value={value} ref={inputRef} onChange={onChangeInput} />
                <button >採点する</button>
            </form>
            <div>結果：{result}</div>
        </React.Fragment>
    );
}    

module.exports = GuGuDan;
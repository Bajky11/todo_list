import { useState } from 'react';

const Input = ({ items, updateItems }) => {
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        const newItems = items.unshift({ title: inputValue, key: 1000 })
        updateItems(newItems);
    }

    return (
        <div className="input">
            <input type="text" onChange={(event) => setInputValue(event.target.value)} />
            <p>{inputValue}</p>
            <button onClick={addItem}>OK</button>
        </div>
    );
}

export default Input;
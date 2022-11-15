import { useState } from 'react';
import './Input.css'

const Input = ({ items, updateItems }) => {
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        const newItems = items.unshift({ title: inputValue, key: 1000 })
        updateItems(newItems);
    }

    return (
        <div className="input">
            <fieldset>
                {inputValue === "" && <legend>Error</legend>}
                <input type="text" onChange={(event) => setInputValue(event.target.value)} />
                <button disabled={inputValue === ""} onClick={addItem}>OK</button>
            </fieldset>
        </div>
    );
}

export default Input;
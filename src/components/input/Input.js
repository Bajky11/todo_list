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
                {inputValue === "" && <legend>Chyba</legend>}
                <label htmlFor="input">Poznámka: </label>
                <input id= "input" type="text" onChange={(event) => setInputValue(event.target.value)} />
                <button disabled={inputValue === ""} onClick={addItem}>Přidej</button>
            </fieldset>
        </div>
    );
}

export default Input;
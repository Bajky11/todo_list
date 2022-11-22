import './TodoList.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const saveChange = (todoObject) => {
    console.log(todoObject)
}

const Item = ({ item, onDelete, onComplete }) => {

    return (
        <div className="item-detail">
            <fieldset>
                <legend>Editace poznámky</legend>
                <label htmlFor="input">Poznámka: </label>
                <input id="input"></input>
                <button onClick={() => saveChange([{todo: "poznamka", completed: true}])}>Uložit</button>
            </fieldset>
            <Link to="/todolist">Back</Link>
        </div>
    );
}

export default Item;
import './TodoList.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Item = ({ item, onDelete, onComplete }) => {

    return (
        <div className="item" style={{
            textDecoration: item.completed ? "line-through" : "",
        }}>
            <p>{item.title}</p>
            <button onClick={() => { onDelete(item.id) }}>X</button>
            <button onClick={() => { onComplete(item.id) }}>✓</button>
            <Link to="/detail">Home</Link>
        </div>
    );
}

export default Item;
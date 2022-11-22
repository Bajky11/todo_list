import { useState, useEffect } from "react"
import List from "./List"
import Input from '../input/Input'
import './TodoList.css';

const TodoList = () => {

    const [items, setItems] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [completedItems, setCompletedItems] = useState(0);

    const updateItems = () => {
        setItems([...items]);
    }

    const resolveCompleted = (id) => {
        const item = items.find(item => item.id === id);
        item.completed ? item.completed = false : item.completed = true;
        setItems([...items]);
    }

    const deleteItem = (id) => {
        const itemIndex = items.findIndex(item => item.id === id);
        items.splice(itemIndex, 1);
        setItems([...items]);
    }

    useEffect(() => {
        const fetchData = async (url) => {
            const response = await fetch(url);
            const json = await response.json();

            if (response.ok) {
                setItems(json);
            }
        };
        fetchData("http://localhost:3004/todos")
    }, [])

    useEffect(() => {
        setFilteredData(items)
        setCompletedItems(items.filter(item => item.completed).length)
    }, [items])

    return (

        <div className="todolist">

            <Input
                items={items}
                updateItems={updateItems}
            />
            <List
                items={filteredData}
                resolveCompleted={resolveCompleted}
                deleteItem={deleteItem}
            />
            <div className="filters">
                <button onClick={() => { setFilteredData(items) }}>All</button>
                <button onClick={() => { setFilteredData(items.filter(item => item.completed === true)) }}>Completed</button>
                <button onClick={() => { setFilteredData(items.filter(item => item.completed === false)) }}>Uncompleted</button>
                <p>Items left: {completedItems}</p>
            </div>
        </div>
    );
}

export default TodoList;
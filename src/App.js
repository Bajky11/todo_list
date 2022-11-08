
import './App.css';
import List from './components/todo_list/list/List'
import Input from './components/input/Input'
import { useState, useEffect } from "react"

function App() {

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
    fetchData("https://jsonplaceholder.typicode.com/todos")
  }, [])

  useEffect(() => {
    setFilteredData(items)
    setCompletedItems(items.filter(item => item.completed).length)
  }, [items])

  return (
    <div className="App">

      <Input
        items={items}
        updateItems={updateItems}
      />
      <List
        items={filteredData}
        resolveCompleted={resolveCompleted}
        deleteItem={deleteItem}
      />
      <button onClick={() => { setFilteredData(items) }}>All</button>
      <button onClick={() => { setFilteredData(items.filter(item => item.completed === true)) }}>Completed</button>
      <button onClick={() => { setFilteredData(items.filter(item => item.completed === false)) }}>Uncompleted</button>
      <p>Items left: {completedItems}</p>

    </div>
  );
}

export default App;

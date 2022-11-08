
import './App.css';
import List from './components/todo_list/list/List'
import Input from './components/input/Input'
import FilterTable from './components/table/FilterTable'
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

  // TABULKA
  /////////////////////////////

  //for: https://jsonplaceholder.typicode.com/todos
  const todos_columns = [
    {
      attribute: "userId"
    },
    {
      attribute: "title"
    },
    {
      attribute: "id",
      component: (item) => <button>{item.id}</button>
    }
  ]

  //for: https://jsonplaceholder.typicode.com/users
  const users_column = [
    {
      attribute: "id"
    },
    {
      attribute: "name"
    },
    {
      attribute: "username",
    },
    {
      attribute: "email"
    },
    {
      attribute: "website"
    }
  ]

  const filters = [
    {
      title: "all",
      filter: (data) => { return [...data] }
    },
    {
      title: "userID (1)",
      filter: (data, criterium) => { return data.filter(item => item.userId === criterium) }
    }
  ]

  /////////////////////////////

  return (
    <div className="App" >

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

      <hr />
      <h1>Deklarativní tabulka</h1>

      <FilterTable
        baseUri={"https://jsonplaceholder.typicode.com/users"}
        columns={users_column}
        filters={filters}>
      </FilterTable>
    </div >
  );
}

export default App;

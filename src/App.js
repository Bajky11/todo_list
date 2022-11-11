
import './App.css';
import FilterTable from './components/table/FilterTable'
import FilterTable2 from './components/table/FilterTable2'
import { todos_columns, users_column } from './components/table/Columns';
import { filters2, filters } from './components/table/Filters';
import TodoList from './components/todo_list/TodoList';

function App() {

  return (
    <div className="App" >

      <h1>Seznam úkolů</h1>
      <TodoList />

      <h1>Deklarativní tabulka</h1>
      <FilterTable
        baseUri={"https://jsonplaceholder.typicode.com/users"}
        columns={users_column}
        filters={filters}>
      </FilterTable>

      <h1>Deklarativní tabulka s filtrem</h1>
      <FilterTable2
        baseUri={"https://jsonplaceholder.typicode.com/todos"}
        columns={todos_columns}
        filters={filters2}>
      </FilterTable2>

    </div >
  );
}

export default App;

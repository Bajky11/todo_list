
import './App.css';
import FilterTable from './components/table/FilterTable'
import FilterTable2 from './components/table/FilterTable2'
import PagingTable from './components/table/PagingTable'
import { todos_columns, users_column } from './components/table/Columns';
import { filters2, filters } from './components/table/Filters';
import TodoList from './components/todo_list/TodoList';

function App() {

  return (

    <div className="background">
      <div className="App" >

        <h1>Seznam úkolů</h1>
        <TodoList />

        <h1>Deklarativní tabulka  s filtrem</h1>
        <FilterTable
          baseUri={"https://jsonplaceholder.typicode.com/todos"}
          columns={todos_columns}
          filters={filters}
        ></FilterTable>

        <h1>Deklarativní tabulka s filtrem</h1>
        <FilterTable2
          baseUri={"https://jsonplaceholder.typicode.com/users"}
          columns={users_column}
          filters={filters2}
        ></FilterTable2>

        <h1>Deklarativní tabulka se stránkováním</h1>
        <PagingTable
          baseUri={"https://jsonplaceholder.typicode.com/todos"}
          columns={todos_columns}
        ></PagingTable>

      </div >
    </div>
  );
}

export default App;

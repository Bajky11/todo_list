
import './App.css';
import FilterTable from './components/table/FilterTable'
import FilterTable2 from './components/table/FilterTable2'
import PagingTable from './components/table/PagingTable'
import { todos_columns, users_column } from './components/table/Columns';
import { filters2, filters } from './components/table/Filters';
import TodoList from './components/todo_list/TodoList';
//React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//START DB: json-server --watch db.json --port 3004

function App() {

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
      component: (item, onClick) => <Link to="/detail" >abcd</Link>
    }
  ]

  return (
    <>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/1">1</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todolist">Seznam úkolů</Link>
              </li>
              <li>
                <Link to="/table_with_filter_1">Deklarativní tabulka s filtrem 1</Link>
              </li>
              <li>
                <Link to="/table_with_filter_2">Deklarativní tabulka s filtrem 1</Link>
              </li>
              <li>
                <Link to="/table_with_paging">Deklarativní tabulka se stránkováním</Link>
              </li>
            </ul>
          </nav>

          <Switch>

            <Route path="/1">



            </Route>
            <Route path="/detail">


            </Route>

            <Route path="/todolist">

              <h1>Seznam úkolů</h1>
              <TodoList />

            </Route>

            <Route path="/table_with_filter_1">

              <h1>Deklarativní tabulka  s filtrem</h1>
              <FilterTable
                baseUri={"http://localhost:3004/todos"}
                columns={todos_columns}
                filters={filters}
              ></FilterTable>

            </Route>
            <Route path="/table_with_filter_2">

              <h1>Deklarativní tabulka s filtrem</h1>
              <FilterTable2
                baseUri={"http://localhost:3004/users"}
                columns={users_column}
                filters={filters2}
              ></FilterTable2>

            </Route>
            <Route path="/table_with_paging">

              <h1>Deklarativní tabulka se stránkováním</h1>
              <PagingTable
                baseUri={"http://localhost:3004/todos"}
                columns={todos_columns}
              ></PagingTable>

            </Route>
          </Switch>
        </div>
      </Router>




      <div className="App" >


        {/*
          <h1>Seznam úkolů</h1>
          <TodoList />
  
          <h1>Deklarativní tabulka  s filtrem</h1>
          <FilterTable
            baseUri={"http://localhost:3004/todos"}
            columns={todos_columns}
            filters={filters}
          ></FilterTable>
  
          <h1>Deklarativní tabulka s filtrem</h1>
          <FilterTable2
            baseUri={"http://localhost:3004/users"}
            columns={users_column}
            filters={filters2}
          ></FilterTable2>
  
          <h1>Deklarativní tabulka se stránkováním</h1>
          <PagingTable
            baseUri={"http://localhost:3004/todos"}
            columns={todos_columns}
          ></PagingTable>
  */}

      </div >
    </>
  );
}

export default App;

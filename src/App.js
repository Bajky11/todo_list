
import './App.css';
import FilterTable from './components/table/FilterTable'
import FilterTable2 from './components/table/FilterTable2'
import PagingTable from './components/table/PagingTable'
import { todos_columns, users_column } from './components/table/Columns';
import { filters2, filters } from './components/table/Filters';
import TodoList from './components/todo_list/TodoList';
import Screen from "./components/screens/Screen"
import ItemDetail from  "./components/todo_list/ItemDetail"
//React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//START DB: json-server --watch db.json --port 3004

function App() {

  return (
    <div className="App" >

      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/todolist">Seznam úkolů</Link>
              </li>
              <li>
                <Link to="/table_with_button_filter">Tabulka s tlačítkovým filtrem</Link>
              </li>
              <li>
                <Link to="/table_with_input_filter">Tabulka s input filtrem</Link>
              </li>
              <li>
                <Link to="/table_with_pagging">Tabulka se stránkováním</Link>
              </li>
            </ul>
          </nav>


          <Switch>

            <Route path="/Home">
              <Screen
                title="Home"
                component={<p>Domovská stránka s rozcestníkem</p>}
              />
            </Route>

            <Route path="/detail">
              <Screen
                title="Detail"
                component={<ItemDetail></ItemDetail>}
              />
            </Route>

            <Route path="/todolist">
              <Screen
                title="Seznam úkolů"
                component={<TodoList />}
              />
            </Route>

            <Route path="/table_with_button_filter">
              <Screen
                title="Tabulka s button filtrem"
                component={
                  <FilterTable
                    baseUri={"http://localhost:3004/todos"}
                    columns={todos_columns}
                    filters={filters}
                  ></FilterTable>
                }
              />
            </Route>

            <Route path="/table_with_input_filter">
              <Screen
                title="Tabulka s input filtrem"
                component={
                  <FilterTable2
                    baseUri={"http://localhost:3004/users"}
                    columns={users_column}
                    filters={filters2}
                  ></FilterTable2>
                }
              />
            </Route>

            <Route path="/table_with_pagging">
              <Screen
                title="Deklarativní tabulka se stránkováním"
                component={
                  <PagingTable
                    baseUri={"http://localhost:3004/todos"}
                    columns={todos_columns}
                  ></PagingTable>
                }
              />
            </Route>
          </Switch>
      </Router>


    </div >

  );
}

export default App;

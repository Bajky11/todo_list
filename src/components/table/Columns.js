import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//for: https://jsonplaceholder.typicode.com/todos
export const todos_columns = [
    {
        attribute: "userId"
    },
    {
        attribute: "title"
    },
    {
        attribute: "id",
        component: (item, onClick) => <Link to="/detail" >tlacitko</Link>
    }
]

//for: https://jsonplaceholder.typicode.com/users
export const users_column = [
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
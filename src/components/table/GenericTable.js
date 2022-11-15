import './Table.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const goToDetail = (id) => {
    console.log("click");
    < Link to="/detail" >{id}</Link >
}

const GenericTable = ({ data, columns, filters }) => {

    return (
        <>
            <div className="generic-table">
                <table>
                    {
                        data.map((item, id) => {
                            return (
                                <tr key={id}>
                                    {columns.map((column, id) => {
                                        return (
                                            <td key={id}>

                                                {column?.component ? column.component(item, () => goToDetail(item.id)) : item[column.attribute]}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </>
    );

}

export default GenericTable;
import './Table.css'

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
                                                {column?.component ? column.component(item) : item[column.attribute]}
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
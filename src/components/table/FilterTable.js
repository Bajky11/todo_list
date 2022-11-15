import GenericTable from "./GenericTable";
import { useState, useEffect } from 'react'
import './Table.css'

const FilterTable = ({ baseUri, columns, filters }) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        const fetchData = async (url) => {
            const response = await fetch(url);
            const json = await response.json();

            if (response.ok) {
                setData(json);
                setFilteredData(json);
            }
        };
        fetchData(baseUri)
    }, [])

    return (

        <div className="table">
            <div className="filters">
                {
                    filters && filters.map(filter =>
                        <button
                            onClick={() => {
                                setFilteredData(filter.function(data, 1))
                            }}
                        >
                            {filter.title}
                        </button>
                    )
                }
            </div>
            <GenericTable data={filteredData} columns={columns}></GenericTable>
        </div>
    );
}

export default FilterTable;
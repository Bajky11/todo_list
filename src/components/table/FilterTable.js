import GenericTable from "./GenericTable";
import { useState, useEffect } from 'react'

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

        <div className="filterTable">
            {
                filters && filters.map(filter =>
                    <button
                        onClick={() => {
                            setFilteredData(filter.filter(data, 1))
                        }}
                    >
                        {filter.title}
                    </button>
                )

            }
            <GenericTable data={filteredData} columns={columns}></GenericTable>
        </div>
    );
}

export default FilterTable;
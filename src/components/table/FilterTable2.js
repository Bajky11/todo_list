import GenericTable from "./GenericTable";
import { useState, useEffect } from 'react'
import './Table.css'

const FilterTable2 = ({ baseUri, columns, filters }) => {

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
            {
                filters && filters.map(filter =>
                    filter.component((event) => {
                        setFilteredData(filter.function(data, event.target.value))
                    })
                )

            }
            <GenericTable data={filteredData} columns={columns}></GenericTable>
        </div>
    );
}

export default FilterTable2;
import GenericTable from "./GenericTable";
import { useState, useEffect } from 'react'
import './Table.css'

const PagingTable = ({ baseUri, columns }) => {

    const PAGE_LIMIT = 10;
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    const fetchData = async (url) => {
        const response = await fetch(url);
        const json = await response.json();

        if (response.ok) {
            setData(json);
            setFilteredData(json);
        }
    };

    useEffect(() => {
        fetchData(baseUri + '?_page=' + page + '&_limit=' + PAGE_LIMIT)
    }, [page])

    return (
        <div className="table">
            <div className="navigation">
                <button onClick={() => setPage(prev => prev - 1)}>previous</button>
                <p>{page}</p>
                <button onClick={() => setPage(prev => prev + 1)}>next</button>
            </div>
            <GenericTable data={filteredData} columns={columns}></GenericTable>
        </div>
    );

}

export default PagingTable;
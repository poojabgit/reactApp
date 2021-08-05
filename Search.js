import React, { useImperativeHandle } from 'react';
import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import { useGlobalContext } from './Context';

const Search = () => {
    // const [search, setSearch] = useState('');

    const { query, setQuery } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Search"
                    name="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button variant="contained">Search</Button>
            </form>
        </div >
    );
}


export default Search;
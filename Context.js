import React, { useEffect, useState } from 'react';
import { useContext, createContext } from 'react';

const client_id = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainURL = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

//create context
const AppContext = createContext()
const AppProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState('');// storing input values
    const [page, setPage] = useState(1);

    // s://api.unsplash.com/search/photos?page=1&query=office>;

    const fetchImages = async () => {
        let url;
        const urlPage = `&page=${page}`
        const urlQuery = `&query=${query}`
        console.log(query);
        if (query) {
            url = `${searchUrl}${client_id}${urlPage}${urlQuery}`;

        } else {

            url = `${mainURL}${client_id}`
        }
        const response = await fetch(url);
        const imageData = await response.json();
        setPhotos(imageData);


    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <AppContext.Provider value={{ photos, query, setQuery }}>{children}</AppContext.Provider>
    )

}
const useGlobalContext = () => {

    return (

        useContext(AppContext)
    )
}

export { AppContext, AppProvider, useGlobalContext }
import { getAllCategories } from '../api.js';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { CategoriesList } from '../components/CategoriesList';
import { Search } from '../components/Search';

import { API_URL } from "../config";

function Home() {

   //console.log(getAllCategories)
    
   const { pathname, search } = useLocation()
    
    const navigate = useNavigate()

    const [catalog, setCatalog] = useState('');

    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())));
        navigate({
            pathname,
            search: `?search=${str}`,
        })
        // console.log('pathname', pathname);
        // console.log(search);
    }

    useEffect(() => {
        getAllCategories().then(data => {
            // console.log(data.categories);
            setCatalog(data.categories);
            setFilteredCatalog(search ? (data.categories.filter(item =>
                item.strCategory
                    .toLowerCase()
                    .includes(search.split('=')[1].toLowerCase())
            )) : (data.categories) );
        })
    },[search])
    //https://jsonplaceholder.typicode.com/

    //www.themealdb.com/api/json/v1/1/categories.php
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    //         console.log(response)
    //       const data = await response.json()
    //       console.log({ data })
    //     }
    
    //     fetchData()
    //   }, [])

    return (
        <div>
            <Search cb={ handleSearch }/>
            {!catalog.length ? (<Preloader />) : (<CategoriesList catalog={ filteredCatalog }/>)}
        </div>
    )
}

export {Home}
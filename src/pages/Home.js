import React, {useState} from 'react'
import MainPageLayouts from '../components/MainPageLayouts'
import {getApi} from '../misc/config';




const Home = () => {

    const [input,setInput] = useState('');
    const [results,setResults] = useState(null);


    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onSearch = () => {
        
        getApi(`/search/shows?q=${input}`)
        .then(result => {
        setResults(result);
        });

    };

    const onKeyDown = (e) => {
        if(e.key === 'Enter')
        {
            onSearch();
        }
    } 

    const renderResults = () => {
        if(results && results.length === 0){
           return <div>No results found!</div>;
        }

        if(results && results.length > 0){
            return (
            <div>
                {results.map((item)=>
                 <div key={item.show.id}>{item.show.name} 
            </div>)}
            </div>
            )}
    }

    return (
        <MainPageLayouts>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} ></input>
            <button type="submit" onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayouts>
    )
}

export default Home

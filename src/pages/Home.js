import React, {useState} from 'react'
import MainPageLayouts from '../components/MainPageLayouts'
import {getApi} from '../misc/config';




const Home = () => {

    const [input,setInput] = useState('');
    const [results,setResults] = useState(null);
    const [searchOption, setSearchOption] = useState("shows");

    const isShowsSearch = searchOption === "shows";


    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onSearch = () => {
        
        getApi(`/search/${searchOption}?q=${input}`)
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

    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value);
    }

    const renderResults = () => {
        if(results && results.length === 0){
           return <div>No results found!</div>;
        }

        if(results && results.length > 0){
            return searchOption === "shows" ? results.map((item)=>
                <div key={item.show.id}>{item.show.name} 
               </div>) : results.map((item)=>
                 <div key={item.person.id}>{item.person.name} 
                </div>)
            }
    }

    console.log(searchOption);

    return (
        <MainPageLayouts>
            <input type="text" placeholder="Search for Something.." onChange={onInputChange} onKeyDown={onKeyDown} value={input} 
            />
            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input id="shows-search"
                    value="shows" type="radio" onChange={onRadioChange} checked={isShowsSearch}/>
                </label>
                <label htmlFor="actors-search">
                    Actors
                    <input id="actors-search" value="people" onChange={onRadioChange} type="radio" checked={!isShowsSearch}/>
                </label>
            </div>
            <button type="submit" onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayouts>
    )
}

export default Home

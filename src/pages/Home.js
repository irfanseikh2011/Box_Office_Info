import React, {useState} from 'react'
import MainPageLayouts from '../components/MainPageLayouts'




const Home = () => {

    const [input,setInput] = useState('');

    const onInputChange = (e) => {
        console.log(e.target.value);
    }

    const onSearch = () => {
        //
        fetch('https://api.tvmaze.com/search/shows?q=girls').then(r => r.json()).then(result => 
        console.log(result));
    }

    const onKeyDown = (e) => {
        if(e.key === 'Enter')
        {
            onSearch();
        }
    } 

    return (
        <MainPageLayouts>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} ></input>
            <button type="submit" onClick={onSearch}>Search</button>
        </MainPageLayouts>
    )
}

export default Home

import React from 'react';
import {Link} from 'react-router-dom';


function Navs() {

    const LINKS = 
    [
        {
            to:'/',
            text:'Home Page'
        },
        {
            to:'/starred',
            text:"Starred Page"
        }
    ]

    return (
        <div>
            <ul>
                    {LINKS.map(item => (
                        <li key={item.to}><Link to={item.to}>{item.text}</Link></li>
                    ))}
            </ul>
        </div>
    );
  }
  
  export default Navs;
  
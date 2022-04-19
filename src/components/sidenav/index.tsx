import React from 'react';
import './index.scss'
import data from '../../storage/data.json'

const Sidenav = ({active})=>{


    return (
        <div className={active ? "sidenav hide" : "sidenav"}>
            <div className="content">
    {data.map((data)=><div ><p style={{color:"white"}}>{data.name}</p></div>)}
    </div>
        </div>
    )
}

export default Sidenav;
import * as React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"
const Header = ()=>{
    const array = ["Home","Products","Comida"]


    return(
        <div className="Header">
        <div className="headerTop">
        <div className="logo" ></div>
         <div className="title"><h1>EBAI</h1><span>so que nao</span></div> 
         <div className="logo" ></div>
        </div>
        <div className="linksHolder">
        {array.map((e)=> e !== "Home" ? <Link className="links" to={e}>{e}</Link> : <Link className="links" to="/">{e}</Link>)}
        </div>
        </div>
    );

}

export default Header;
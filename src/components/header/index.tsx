import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"
import Sidenav from '../sidenav/index.tsx'
const Header = ()=>{
    const array = ["Home","Categorys","Products"]
 const [active,setActive] = useState(false)

    return(
        <>
        <div className="Header">
            
        <div className="headerTop">
        <div className="logol" ></div>
         <div className="title"><h1>EBAI</h1><span>so que nao</span></div> 
         <div className="logor" onClick={()=> setActive(active ? false : true)} ><p>bruhh</p></div>
        </div>
        <div className="linksHolder">
        {array.map((e)=> e !== "Home" ? <Link className="links" to={e}>{e}</Link> : <Link className="links" to="/">{e}</Link>)}
        </div>
        </div>
          <Sidenav active={active}/>
        </>
    );

}

export default Header;
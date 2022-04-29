import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"
import Sidenav from '../sidenav/index.tsx'
const Header = ()=>{
  
    const array = ["Home","Categorys","Products"]
 const [active,setActive] = useState(true)

    return(
        <>
        <div className="Header">
            
        <div className="headerTop">
        <div className="logol" ></div>
         <div className="title"><h1>EBAI</h1></div> 
         <div className="logor" onClick={()=> setActive(active ? false : true)} ><p>CART</p></div>
        </div>
        <div className="linksHolder">
        {array.map((e)=> e !== "Home" ? <Link className="links" key={e} to={e}>{e}</Link> : <Link className="links" key={e} to="/">{e}</Link>)}
        </div>
        </div>
          <Sidenav active={active} setActive={setActive}/>
        </>
    );

}

export default Header;
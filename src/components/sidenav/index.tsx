import React,{useContext} from 'react';
import './index.scss'
import data from '../../storage/data.json'
import { GlobalContextCart } from '../../utils/context/ferrariContext.tsx';
const Sidenav = ({active})=>{
    const { cart, setCart } = useContext(GlobalContextCart);
console.log(cart)
    return (
        <div className={active ? "sidenav hide" : "sidenav"}>
            <div className="content">
    {cart.map((data)=><div ><p style={{color:"white"}}>{data.name}</p></div>)}
    </div>
        </div>
    )
}

export default Sidenav;
import React,{useContext, useEffect,useState} from 'react';
import './index.scss'
import data from '../../storage/data.json'
import { GlobalContextCart } from '../../utils/context/ferrariContext.tsx';
import {FaArrowRight} from 'react-icons/fa'
const Sidenav = ({active, setActive})=>{
    const { cart, setCart } = useContext(GlobalContextCart);
    const [price,setPrice] = useState(0);

    useEffect(()=>{
        if(cart.length === 0){
            return;
        }
        
        setPrice(price + cart[cart.length-1]["price"]);
    },[cart])

    return (
        <div className={active ? "sidenav hide" : "sidenav"}>
            <div className="top">
                <FaArrowRight    className="hidebtn" onClick={()=>setActive(active ? false:true )}/>
            </div>
            <h2>Your items:</h2>
            <div className="content">
    {cart.map((data,i)=><div key={data.name + i } className="item">
        <img  style={{width: "60px", height: "50px"}} src={data.img[0]}></img>
        <p >{data.name}</p>
        <p>{data.price} €</p>
        </div>)}
    </div>
    <div className="buybutton">
    <button className="cashout" onClick={()=> setCart([])} ><span>PAY TIME</span></button>
    <div className="price" >{price}€</div>
    </div>
    
        </div>
    )
}

export default Sidenav;
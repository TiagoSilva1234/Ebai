import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/context.tsx";
import {GlobalContextCart} from '../../utils/context/ferrariContext.tsx'
import{useNavigate, useParams} from 'react-router-dom'
import data from '../../storage/data.json'
import './index.scss';
type obj = {
  id: number,
  name:string,
  price:number,
  description: string,
  img: string[],
  category: {},
}


const Single = () => {
  const navigate = useNavigate()
   const {id} = useParams();
const {cart, setCart} = useContext(GlobalContextCart);
let search = window.location.search;
let params = new URLSearchParams(search);

const post : obj[] = data.filter((e)=> e.id === parseInt(id));

function handleClick() {
  setCart( previous =>[...previous,post[0]]);

}

  
  if(post.length === 0){
    return <h1>loading...</h1>
  }
  return (
    <div className="Product">
      <div className="routes">
        <p>
          {post[0].category["0"]} &gt; {post[0].category["1"]} &gt; {post[0].category["2"]  }
        </p>
      </div>
      <div className="mainpage">
        <div className="image">
          <img src={post[0].img[0]} ></img>
        </div>
        <div className="info">
        <div className="name">
          <h1>{post[0].name}</h1>
          <div className="price">{post[0].price} <span> €/unit</span></div>
        </div>
        <div className="description">{post[0].description}</div>
   <div><button className="addcart" onClick={()=>handleClick()}>ADD TO CART</button></div>
        </div>
      </div>
    </div>
  );
};
export default Single;

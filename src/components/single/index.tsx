import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/context.tsx";
import {GlobalContextCart} from '../../utils/context/ferrariContext.tsx'
import{useNavigate} from 'react-router-dom'
import './index.scss';
const Single = () => {
  const navigate = useNavigate()
  const { post, setPost } = useContext(GlobalContext);
const {cart, setCart} = useContext(GlobalContextCart);
function handleClick() {
  setCart( previous =>[...previous,post]);
  navigate(-1)
}
  console.log(post.category["0"]);
  return (
    <div className="Product">
      <div className="routes">
        <p>
          {post.category["0"]} &gt; {post.category["1"]} &gt; {post.category["2"]  }
        </p>
      </div>
      <div className="mainpage">
        <div className="image">
          <img src={post.img[0]} ></img>
        </div>
        <div className="info">
        <div className="name">
          <h1>{post.name}</h1>
          <div className="price">{post.price} <span> €/unit</span></div>
        </div>
        <div className="description">{post.description}</div>
   <div><button className="addcart" onClick={()=>handleClick()}>ADD TO CART</button></div>
        </div>
      </div>
    </div>
  );
};
export default Single;

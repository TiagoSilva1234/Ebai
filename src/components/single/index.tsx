import React, { useContext } from 'react';
import {GlobalContext} from '../../utils/context/context.tsx'

const Single = ()=>{
 const{post,setPost} = useContext(GlobalContext);

console.log(post.category["0"])
    return (
        <div className="Product">
<div className ="routes">
    <p>{post.category["0"]}&gt;{post.category["1"]}&gt;{post.category["2"]}</p>

</div>
<div className="mainpage">
    <div className="image"><img src={post.img[0]} height="300px"width="360px"></img></div>
    <div className="name"><h1>{post.name}</h1></div>
    <div className="description">{post.description}</div>
    <div className="price">{post.price}€</div>
</div>


            </div>
    )
}
export default Single;
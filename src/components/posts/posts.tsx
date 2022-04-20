import React,{useContext, useEffect} from "react";
import "./posts.scss";
import {GlobalContext} from '../../utils/context/context.tsx'
import {useNavigate} from 'react-router-dom';
const Posts = ({ posts }) => {

 const navigate = useNavigate();

  const{post,setPost} = useContext(GlobalContext);

 function  goToProduct(p){
   setPost(p);
 navigate("/product")
 }
 useEffect(()=>{},)
  return (
    <ul className="List">
      {posts.map((post) => (
        <li key={post.id}>
          <div onClick={()=>goToProduct(post)} className="singlepost">
          <div  className="post" style={{ backgroundImage: `url(${post.img})` }}></div>
          <p style={{cursor: 'pointer'}}>{post.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Posts;

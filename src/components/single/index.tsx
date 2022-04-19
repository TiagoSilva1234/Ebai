import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/context.tsx";
import './index.scss';
const Single = () => {
  const { post, setPost } = useContext(GlobalContext);

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
          <div className="price">{post.price} €</div>
        </div>
        <div className="description">{post.description}</div>
   
        </div>
      </div>
    </div>
  );
};
export default Single;

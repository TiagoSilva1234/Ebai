import React from "react";
import "./posts.scss";

const Posts = ({ posts }) => {
  return (
    <ul className="List">
      {posts.map((post) => (
        <li key={post.id}>
          <div style={{ backgroundImage: `url(${post.img})` }}></div>
          <p>{post.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default Posts;

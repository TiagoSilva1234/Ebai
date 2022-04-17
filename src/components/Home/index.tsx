import React, { useEffect, useState } from "react";
import "./index.scss";
import data from "../../storage/data.json";
import { StyledImageContainer } from "../styled/styled";
const img = [
  "https://www.teahub.io/photos/full/128-1287412_dessert-hd-desserts-backgrounds.jpg",
  "https://images6.alphacoders.com/434/thumb-1920-434430.jpg",
  ,
  "https://www.wallpaperbetter.com/wallpaper/682/950/500/dessert-cake-berries-2K-wallpaper.jpg",
];
const Home = () => {
 
  const [left, setLeft] = useState("0%");
  useEffect(() => {
  setTimeout(() =>{
     
      if (left === "0%") {
        setLeft("-100%");
      return;
      }else if (left === "-100%") {
        setLeft("-200%");
        return;
      }
      setLeft("0%");
    },10000);
   
  },);

  return (
    <div className="Home">
      <h1>Welcome to the best shop youll ever see :)</h1>
      <div className="slider">
        <StyledImageContainer left={left}>
          {img.map((e) => (
            <img src={e} className="slide" width="100%" height="100%" />
          ))}
        </StyledImageContainer>

        <div className="buttons">
          <button onClick={() => setLeft("0%")} />
          <button onClick={() => setLeft("-100%")} />
          <button onClick={() => setLeft("-200%")} />
        </div>
      </div>
    </div>
  );
};
export default Home;

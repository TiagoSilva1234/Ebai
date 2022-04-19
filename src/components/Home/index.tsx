import React, { useEffect, useState } from "react";
import "./index.scss";
import data from "../../storage/data.json";
import { StyledImageContainer } from "../styled/styled";
const img = [
  "https://www.wallpaperbetter.com/wallpaper/196/892/8/modern-green-sofa-2K-wallpaper.jpg",
  "https://c4.wallpaperflare.com/wallpaper/582/443/760/white-design-room-sofa-wallpaper-preview.jpg",
  ,
  "https://wallpapercave.com/wp/wp1942060.jpg",
];
const Home = () => {
 
  const [left, setLeft] = useState("0%");
  useEffect(() => {
  const idk = setTimeout(() =>{
     

      if (left === "0%") {
        setLeft("-100%");
      return;
      }else if (left === "-100%") {
        setLeft("-200%");
        return;
      }
    
      setLeft("0%");
      
    },5000);
   return ()=> clearTimeout(idk)
  },[left]);

  return (
    <div className="Home">
      <h1>Welcome to Ebai.</h1>
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

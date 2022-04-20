import React, { useState, useEffect } from "react";
import "./index.scss";
import data from "../../storage/data.json";
import Posts from "../posts/posts.tsx";
import Pagination from "../pagination/pagination.tsx";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate,useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Comida = () => {
  const navigate = useNavigate();
  let search = window.location.search;
let params = new URLSearchParams(search);

  const [posts, setPosts] = useState([]);


  const [currentPage, setCurrentPage] = useState(params.get("page")!== null? parseInt(""+ params.get("page")) : 1 );

  const [postsPerPage, setPostPerPage] = useState(8);
  const [filter, setFilter] = useState("");



  useEffect(() => {
    if (filter === "Hprice") {
      setPosts((ye) => data.sort((a, b) => b.price - a.price));
      setCurrentPage(2);
      setTimeout(() => setCurrentPage(1), 0);

      return;
    }
    if (filter === "Lprice") {
      setPosts((ye) => data.sort((a, b) => a.price - b.price));
      setCurrentPage(2);
      setTimeout(() => setCurrentPage(1), 0);

      return;
    }
    if (filter === "sofas") {
        setPosts((ye) => data.filter((a) => a.category["2"] === "Sofas"));
        setCurrentPage(2);
        setTimeout(() => setCurrentPage(1), 0);
  
        return;
      }
      if (filter === "armarios") {
      
        setPosts((ye) => data.filter((a) => a.category["2"] === "Armarios"));
        setCurrentPage(2);
        setTimeout(() => setCurrentPage(1), 0);
  
        return;
      }
    setPosts((ye) => data.sort((a, b) => a.id - b.id));
   
    return;
  }, [filter]);
  useEffect(() =>{
   
  },[currentPage])
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: any, postsNumber: any) => {
  
    
 
    if (pageNumber === "previous" && currentPage == 1) {
      return;
    }
    if (pageNumber === "next" && currentPage + 1 !== postsNumber) {
      return;
    }
    if (typeof pageNumber === "string") {
        pageNumber === "previous" ?  navigate("?page="+(currentPage-1)) :  navigate("?page="+(currentPage+1))
      return;
    }
    navigate("?page="+currentPage);
   
  };

  return (
    <div className="Comida">
      <div className="stuff">
      
        <DropdownButton
       
          menuVariant="dark"
          title="filter by price"
          drop="end"
          className="dropbut"
          id="dropdown-button-dark-example1"
          variant="secondary"
        >
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => setFilter("")}>none</Dropdown.Item>
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => setFilter("Hprice")}>
            Higher{" "}
          </Dropdown.Item>
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => setFilter("Lprice")}>
            Lower{" "}
          </Dropdown.Item>
    
        </DropdownButton>
        <DropdownButton
          menuVariant="dark"
          title="casa"
          drop="down"
          className="firstdrop"
          id="dropdown-button-dark-example1"
          variant="secondary"
        >
          <DropdownButton
          menuVariant="dark"
          title="mobilia"
          drop="end"
          className="seconddrop"
          id="dropdown-button-dark-example1"
          variant="secondary"
        >
            
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => setFilter("armarios")}>armarios</Dropdown.Item>
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => setFilter("sofas")}>
            sofas
          </Dropdown.Item>
         
    
        </DropdownButton>
        <DropdownButton
          menuVariant="dark"
          title="etc"
          drop="end"
          className="seconddrop"
          id="dropdown-button-dark-example1"
          variant="secondary"
        >
              <Dropdown.Item style={{color:"rosybrown"}} onClick={() => setFilter("sofas")}>
            example
          </Dropdown.Item>
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => setFilter("sofas")}>
            example
          </Dropdown.Item>
        </DropdownButton>
          
      
        </DropdownButton>
    
    
      </div>

      <div className="productsList">
        <Posts className="products" posts={currentPosts} />
      </div>
      <div className="pagination">
        <Pagination
          className="pagination"
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    
    </div>
  );
};
export default Comida;

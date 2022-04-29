import React, { useState, useEffect, useLayoutEffect } from "react";
import "./index.scss";
import data from "../../storage/data.json";
import Posts from "../posts/posts.tsx";
import Pagination from "../pagination/pagination.tsx";
import { useNavigate,useLocation,useParams,Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from '../search/index.tsx'

const Comida = () => {
  const {filter} = useParams();
  const navigate = useNavigate();
  let search = window.location.search;
let params = new URLSearchParams(search);
  const [posts, setPosts] = useState([]);

  const [check,setCheck] = useState(0);

  const [currentPage, setCurrentPage] = useState(params.get("page")!== null? parseInt(""+ params.get("page")) : 1 );

  const [sort, setSort] = useState(params.get("sort")!== null? parseInt(""+ params.get("sort")) : "none" );

  const [postsPerPage, setPostPerPage] = useState(8);
  const [filterd, setFilterd] = useState("none");

  function addFilter(filter){
    setCheck(check === 0 ? 1: 0)
    if(filter === "none"){

    navigate(`/Products/?sort=${sort}&page=${1}`)
    }else{
      navigate(`/Products/${filter}/?sort=${sort}&page=${1}`)
    }
  }
  function addSort(sort){
    setCheck(check === 0 ? 1: 0)
    setSort(sort)
    if(filter === undefined){
    navigate(`/Products/?sort=${sort}&page=${1}`)
    }else{
      navigate(`/Products/${filter}/?sort=${sort}&page=${1}`)
    }
   
  }
  useEffect(()=>{
    
    if(filter === undefined){
      addFilter("none")
    }
  },[filter])

  useEffect(() => {
    const copy = [...data]
    
    if (sort === "Hprice") {
   
     copy.sort((a, b) => b.price - a.price);
      setPosts(copy);
 
    }
    if (sort === "Lprice") {
    
      copy.sort((a, b) => a.price - b.price);
       setPosts(copy);    
 
    }
    if(sort === "none"){
      copy.sort((a, b) => a.id - b.id);
      setPosts(copy)
    }

    if (filter === "sofas") {
        setPosts((ye) => copy.filter((a) => a.category["2"] === "Sofas")); 
        return;
      }
      if (filter === "armarios") {  
        setPosts((ye) => copy.filter((a) => a.category["2"] === "Armarios"));
        return;
      }
    
  }, [check]);
  
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
        pageNumber === "previous" ?  navigate(`Products/${filter}/?page=`+(currentPage-1)) :  navigate(`Products/${filter}/?page=`+(currentPage+1))
      return;
    }
    navigate(`Products/${filter}/?page=`+currentPage);
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
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => addSort("none")}>none</Dropdown.Item>
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => addSort("Hprice")}>
            Higher{" "}
          </Dropdown.Item>
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => addSort("Lprice")}>
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
            
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => addFilter("armarios")}>armarios</Dropdown.Item>
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => addFilter("sofas")}>
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
              <Dropdown.Item style={{color:"rosybrown"}} onClick={() => addFilter("none")}>
           none
          </Dropdown.Item>
          <Dropdown.Item style={{color:"rosybrown"}} onClick={() => addFilter("sofas")}>
            example
          </Dropdown.Item>
        </DropdownButton>
          
      
        </DropdownButton>
    
    <Search placeholder="Search" data={data}/>
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
          filter={filter}
        />
      </div>
    
    </div>
  );
};
export default Comida;

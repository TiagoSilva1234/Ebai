import React,{useState,useEffect} from 'react';
import './index.scss'
import data from '../../storage/data.json'
import Posts from "../posts/posts.tsx"
import Pagination from '../pagination/pagination.tsx'

const Comida = ()=>{

 const [posts,setPosts] = useState([])
 const[currentPage,setCurrentPage] = useState(1);
 const [postsPerPage,setPostPerPage] = useState(9)

useEffect(()=>{
    console.log(data)
    setPosts(data)
},[])

const paginate = (pageNumber)=> setCurrentPage(pageNumber)
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost-postsPerPage
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

    return(
        <div className="Comida">
   
        <div className="productsList">
        <Posts className="products" posts={currentPosts}/>
      
        <Pagination className="pagination" postsPerPage={postsPerPage}
    
        totalPosts={posts.length} 
        paginate={paginate}/>
          </div> 
        </div>
    )
}
export default Comida;
import React,{useState,useEffect} from 'react';
import './index.scss'
import data from '../../storage/data.json'
import Posts from "../posts/posts.tsx"
import Pagination from '../pagination/pagination.tsx'

const Comida = ()=>{

 const [posts,setPosts] = useState([])
 const[currentPage,setCurrentPage] = useState(1);
 const [postsPerPage,setPostPerPage] = useState(8)

useEffect(()=>{

    setPosts(data)
},[])


const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost-postsPerPage
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
const paginate = (pageNumber: any, postsNumber: any)=> {
    if(pageNumber === "previous" && currentPage == 1 ){    
        return;
    }
    if(pageNumber === "next" && currentPage+1 !== postsNumber){
        return;
    }
if(typeof pageNumber === "string"){
    setCurrentPage( pageNumber === "previous" ? currentPage -1 : currentPage + 1 );
    return;
}
    setCurrentPage(pageNumber)
}

    return(
        <div className="Comida">
   
        <div className="productsList">
        <Posts className="products" posts={currentPosts}/>
        </div> 
        <div className="pagination">
        <Pagination className="pagination" currentPage={currentPage} postsPerPage={postsPerPage}
    
        totalPosts={posts.length} 
        paginate={paginate}/>
         </div>
        </div>
    )
}
export default Comida;
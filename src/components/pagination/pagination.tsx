import React from 'react'
import'./pagination.scss'
import { Link } from 'react-router-dom';

const Pagination = ({postsPerPage,totalPosts,paginate,currentPage,filter})=>{
 const pageNumbers =[];
 
 for(let i = 1;i<= Math.ceil(totalPosts/postsPerPage);i++){
     pageNumbers.push(i)
 }

 return(
     <ul>
         <li>
         <Link className="link" to={`/Products/${filter}/?page=${Math.max(currentPage -1,1)}`} onClick={()=>currentPage(Math.max(currentPage -1,1))}>&lt;
         </Link>
         </li>
         {pageNumbers.map(number=>(<li key={number}>
             <Link className="link" to={`/Products/${filter}/?page=${number}`} onClick={(()=>currentPage(number))} style={currentPage === number? {color: "rosybrown"}: {color:"white" }} >
                 {number}
             </Link>
         </li>))}
         <li>
         <Link  className="link" to={`/Products/${filter}/?page=${Math.min(currentPage +1,pageNumbers.length)}`} onClick={()=>currentPage(Math.max(currentPage +1,1))}>&gt;</Link>
         </li>
     </ul>
 )
         }


export default  Pagination;

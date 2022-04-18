import React from 'react'
import'./pagination.scss'

const Pagination = ({postsPerPage,totalPosts,paginate})=>{
 const pageNumbers =[];
 for(let i = 1;i<= Math.ceil(totalPosts/postsPerPage);i++){
     pageNumbers.push(i)
 }
 return(
     <ul>
         {pageNumbers.map(number=>(<li key={number}>
             <a style={{cursor: 'pointer'}} onClick={()=> paginate(number)}>
                 {number}
             </a>
         </li>))}
     </ul>
 )
         }


export default  Pagination;

import React,{ createContext,ReactNode, useState } from 'react';
import data from '../../storage/data.json'


type ContextProps = {
    children: ReactNode;
}

type obj = {
    id: number,
    name:string,
    price:number,
    description: string,
    img: string[],
    category: {},
}

export type currentPost = {
    post: obj,
    setPost: (newState:obj) => void
}


const postDefault ={
    post:data[0],
    setPost: ()=> {},
}

export const GlobalContext = createContext<currentPost>(postDefault);


export const PostContext = ({children}: ContextProps) =>{

    const [post,setPost] = useState(postDefault.post)

    return(
        <GlobalContext.Provider value={{post,setPost}}>
         {children}
        </GlobalContext.Provider>
    );

}
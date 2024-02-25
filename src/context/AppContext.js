import {createContext, useState} from 'react'
import { baseurl } from '../Baseurl';

// step-1
export const AppContext=createContext();
export default function AppContextProvider({children}){
    const [loading,setloading]=useState(false);
    const[post,setpost]=useState([])
    const[pages,setpages]=useState(1)
    const[totalpages,settotalpages]=useState(null)
// step -3
async function fatchdata(){
    setloading(true);
    let url=`${baseurl}?pages=${pages}`;
    try{
const result=await fetch(url);
const data=await data.json()
console.log(data)
setpages(data.page)
setpost(data.posts)
settotalpages(data.totalpages)

    }
    catch(error){
console.log(" errorr");
setpages(1);
setpost([]);
settotalpages(null);
    }
    setloading(false);
}
function handlepagechange(pages){
    setpages(pages);
    fatchdata(pages);
}
// data sending
    const value={
        loading,
        setloading,
        post,
        setpost,
        pages,
        setpages,
        fatchdata,
        handlepagechange,
        totalpages,
        settotalpages
    }
    // step -2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    }

    

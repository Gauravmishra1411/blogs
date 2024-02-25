import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinning from './Spinning';
import Card from './Card';
function Blogs() {
  //consume
    const {post,loading}=useContext(AppContext)
  return (
    <div>
{
    loading ?
    
    (<Spinning/>):
    (
        post.loading===0?(<div><p>No post Found true case </p></div>):
        (post.map((posts)=>(<div key={post.id}>
           <p>{post.title}</p>
           <p>
           By <span>{post.author}</span>on<span>{post.category}</span></p>
           <p>Posted on {post.date}</p>
           <p>{post.content}</p>
           <p>
            {post.tags.map((tag,index)=>{
              return <span key={index}>{`#${tag}`}</span>
            })}
           </p>
        </div>)))
    )
}
    </div>
  )
}

export default Blogs
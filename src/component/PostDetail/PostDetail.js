import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const PostDetail = () => {
    const [post ,setPosts]=useState({})
    const {postId}=useParams()
    useEffect(()=>{
   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
   .then(res=>res.json())
   .then(data=>setPosts(data))
    },[postId])
    return (
        <div>
            <h4>This is post detail id:{postId}</h4>
             <h5>{post.title}</h5>
             <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetail;
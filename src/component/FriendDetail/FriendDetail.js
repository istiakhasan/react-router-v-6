import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const FriendDetail = () => {
   const {friendId}=useParams()
   const [friend,setFriend]=useState({})
   const [loading,setLoading]=useState(true)
   useEffect(()=>{
       const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setLoading(false) 
        setFriend(data)})
   },[])
 
    return (
        <>
    {
        !loading?(
            <div>
            <h2>Single Friend Details </h2>
            <h3>Name:{friend.name}</h3>
            <h3>Email:${friend.email}</h3>
            <h6>Website:${friend.website}</h6>
            <p><small>City:{friend.address.city}</small></p>
            <p><small>Lat:{friend.address.geo.lat}</small></p>
            
        </div>
        ):(<h1 style={{fontWeight:'bold',color:"red"}}>Loading.............</h1>)
    }
   
        </>
    );
};

export default FriendDetail;
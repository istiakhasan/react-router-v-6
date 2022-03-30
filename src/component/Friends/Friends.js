import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setFriends]=useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h2>Hellow Friends , How are you</h2>
            <h2>Please lend me some money..{friends.length}</h2>
            {
                friends.map(friend=><Friend key={friend.id} friend={friend} />)
            }
            
        </div>
    );
};

export default Friends;
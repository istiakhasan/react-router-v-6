import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,username,id}=props.friend
    const navigate=useNavigate()
    const showFriendDetail=()=>{
        const path=`/friends/${id}`
        navigate(path)
    }
    return (
        <div>
            <h2>Name:{name}</h2>
            <button onClick={showFriendDetail}>
                {username} id:{id}</button>
                {/* <Link to={`/friends/${id}`}>Show Details</Link> */}
                {/* <Link to={'/friends/'+id}>show details</Link> */}
        </div>
    );
};

export default Friend;
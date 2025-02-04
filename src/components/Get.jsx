import React from 'react';
import { useState,useEffect } from 'react';
const getUsers="https://jsonplaceholder.typicode.com/posts"
console.log(getUsers);
const Get=()=>{
    const [user,getUser]=useState([])
    const userHandeler=async()=>{
        const getData=await fetch(getUsers)
        const newData=await getData.json();
        getUser(newData);
        console.log(user);
    }
    useEffect(()=>{
        userHandeler();
    },[])
   
    
    return (
        <div>
            {user.map((item)=>{
                console.log(item);
                return(
                    <div>
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}

export default Get

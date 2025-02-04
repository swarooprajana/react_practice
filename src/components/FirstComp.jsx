import React from "react";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';


function FirstComp(){
    const [screensize,changedscrensize]=useState({
        width:window.innerWidth,
        height:window.innerHeight,
    })
    const [input,inputChange]=useState("")

    const inputUpdate=(event)=>{
        console.log(event);
        inputChange(event.target.value)
    }
    const updateScreenSize=()=>{
        changedscrensize({
            width:window.innerWidth,
            height:window.innerHeight,
        })
    }

    useEffect(()=>{
        window.addEventListener('resize',updateScreenSize)
        return ()=>{
            window.removeEventListener('resize',updateScreenSize) 
        }
    })
    const [newUsername,changedUsername]=useState("")
    const notify = (message) => toast(message);
    const getUsername=(e)=>{
        e.preventDefault()
        changedUsername(input)
        notify(input)
    }

    return (
        <div>
            <h1>FirstComp</h1>
            <p>First screen size:{screensize.width}</p>
            <p>First screen size:{screensize.height}</p>
            <form onSubmit={getUsername}>
            <input type="text" placeholder="enter" onChange={inputUpdate} />
            <p>{newUsername}</p>
            <button type="submit" >CLick here </button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default FirstComp; 
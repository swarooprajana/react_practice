import React from 'react'
import { useState } from 'react';
function Form() {
    const [title,setName]=useState("");
    const [dueDate,setDueDate]=useState("");
    const [completed,setCompleted]=useState("");
    const [id,setId]=useState("");

    console.log(title,dueDate,completed,id);
    const empDetails={title,dueDate,completed,id}
   const empHandler=async (e)=>{
        e.preventDefault()
        try{ 
            const response=await fetch("https://fakerestapi.azurewebsites.net/api/v1/Activities",{
                method:"POST",
                headers:{
                    "Content-Type":"Application/json"
               },
               body:JSON.stringify(empDetails)
            })
           
        } catch (error) {
          console.error("Error updating employee:", error);
        }
        }

    return (
        <div>
            <form className="boxshadow-form" onSubmit={empHandler}>
                <div className=''>
                    <div className='col-md-12 col-sm-12'>
                        <label>Post</label>
                    </div>
                    <div className='col-md-12 col-sm-12'>
                        <div className='row flex-center m-0'>
                            <div className='col-md-6 '>
                                <label for="title">Title</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" name="title" id="title" onChange={(e)=>setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className='row flex-center m-0'>
                            <div className='col-md-6 '>
                                <label for="dueDate">dueDate</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" name="dueDate" id="dueDate" onChange={(e)=>setDueDate(e.target.value)}/>
                            </div>
                        </div>
                        <div className='row flex-center m-0'>
                            <div className='col-md-6 '>
                                <label for="completed">completed</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" name="completed" id="completed" onChange={(e)=>setCompleted(e.target.value)}/>
                            </div>
                        </div>
                        <div className='row flex-center m-0'>
                            <div className='col-md-6 '>
                                <label for="id">id</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" name="id" id="id" onChange={(e)=>setId(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Form

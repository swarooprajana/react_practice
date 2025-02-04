import React from 'react'
import { user } from './data';
function SampleArray() {
    console.log(user,"data");
    const array=["swaroop",35,"software developer",{username:"swaroop@gmail.com"}]
    const course="reactjs";
    return (
        <div>
            <h1>{array[1]}</h1>
            <h2>{array[3].username}</h2>
            {user.map((userData)=>{
                return(
                    <div>
                        <div>{userData.title}</div>
                        
                    </div>
                        
                )
            })}
            <div>{`i am learning ${course}`}</div>
        </div>
    )
}

export default SampleArray;

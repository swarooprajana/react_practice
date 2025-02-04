
import './App.scss';
import Login from './components/Login';
import FirstComp from './components/FirstComp';
import { useState, useEffect } from 'react';
import SampleArray from './SampleArray';
import Get from './components/Get';
import Form from './components/Form';
function App() {
  // const [city,setCity]=useState("Hyderabad");
  // useEffect((city)=>{
  //   if(city === "Hyderabad"){
  //     setCity("Bengaloore");
  //     console.log(city);
  //   }else{
  //     setCity("goa");
  //   }
  // },[])
  const apple={
    name:"swaroop",
  }
  const [showComponent,hideComponent]=useState(false)
  const [number,setNumber]=useState(0);
  const increament=()=>{
    setNumber(number+1)
  }
  const decreament=()=>{
    if(number>0){
      setNumber(number-1)
    }
  }
  const reset=()=>{
    setNumber(0)
  }
  return (
    <div className="App">
      {/* <div className='textcenter'>
        {showComponent?<Login name={apple}/>:<FirstComp />}  
      </div> 
      <button onClick={increament} >Increament</button>
      <button onClick={decreament}>Decrement</button>
      <button onClick={reset}>reset</button>
      {number}
      <SampleArray />
      <Get /> */}
      <Form />
    </div>
  );
}

export default App;

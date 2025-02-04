import React from "react";
import Card from "@mui/material/Card";
function Login(name){
       
    return(
        <div  className="row">
            <div className="col-md-12">
                <Card>
                    <h1>Login {name.name}</h1>
                </Card>
            </div>
            
            
        </div>
    )
}
export default Login;
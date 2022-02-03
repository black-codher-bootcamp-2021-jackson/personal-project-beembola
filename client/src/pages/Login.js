import { Fragment } from "react";
import { Link } from "react-router-dom";
import  React, {useState} from "react";

function Login() {
const [userName, setUserName] = useState("");
const [passWord, setPassWord] = useState("");
    
  return (
    <div>
      <h1>Sign/Signup</h1>
<form>
    <input onChange={(e)=> setUserName(e.target.value)}
      placeholder ="UserName"
       />
   <br />
   <input onChange={(e)=> setPassWord(e.target.value)}
    placeholder ="PassWord" />
   <br />
    <div>
        <button id="login">Login</button>
    </div>
    </form>      
    </div>

  );
}
export default Login;

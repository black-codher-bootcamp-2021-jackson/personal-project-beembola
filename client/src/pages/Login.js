import { Fragment } from "react";
import { Link } from "react-router-dom";
function Login() {


    
  return (
    <>
<form>
    <label>
        <p>UserName</p>
    </label>
    <label>
        <p>PassWord</p>
    </label>
    <div>
        <button id="submit">Submit</button>
    </div>
    </form>      
    </>

  );
}
export default Login;

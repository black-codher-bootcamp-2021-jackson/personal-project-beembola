import React from "react";
import "../styles/Walkthrough.css";

function WalkThrough(){
  
    return (
        <div  id="WalkThrough">
        <div ClassName="stepByStepguide">A quick Walkthrough of TeckNote App </div>

<div ClassName="Steps">
      <ul>
          <li>Step 1: Sign in/login for your free TeckNote</li>
          <img src={require('../images/stepOne.jpg')}/>
          <li>step 2: Write your first Entry</li>
          <img src={require('../images/stepTwo.png')}/>
          <li>step 3:Edit and delete Notes</li>
          <img src={require('../images/stepThree.jpg')}/>
          <li>step 4: logout </li>
          <img src="import from github/vscode/"/>
      </ul>
      </div> 
        </div>
      
    )
}
  export default WalkThrough ;

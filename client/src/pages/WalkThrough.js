import React from "react";
import "../styles/Walkthrough.css";
import stepOne from "../images/stepOne.jpg";

const WalkThroughCard = (props) => {
  return (
    <div className="Walkthrough-Container">
      <div ClassName="heading">
        <h1> Steps by steps guild</h1>
        <img scr={stepOne} alt="" />
      </div>

      <div ClassName="cardsRow">
        <div ClassName="card">
          <div ClassName="cardHeaders">
            Step 1: Sign in/login for your free TeckNot
          </div>
          <div class="card-img">
            Step 1: Sign in/login for your free TeckNote
            <img src={require("../images/stepOne.jpg")} />
          </div>

          <div class="card-img">
            Step 2: Sign in/login for your free TeckNote
            <img src={require("../images/stepTwo.png")} />
          </div>

          <div class="card-img">
            Step 3: Sign in/login for your free TeckNote
            <img src={require("../images/stepThree.jpg")} />
          </div>

          <div class="card-img">
            Step 4: Sign in/login for your free TeckNote
            <img src="import from github/vscode/" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WalkThroughCard;

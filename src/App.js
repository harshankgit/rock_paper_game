import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";

import user from "./user.png";
import cpu from "./cpu.png";
import "./App.css";
import InpTake from "./InpTake";

const App = () => {
  const gamecontainer = document.querySelector(".container"),
    userresult = document.querySelector(".userinp img"),
    cpurresult = document.querySelector(".cpuinp img"),
    optionimg = document.querySelectorAll("inp img"),
    result = document.getElementById("result");
  console.log(userresult);
  console.log(result, optionimg, cpurresult, gamecontainer);
  optionimg.forEach((image, index) => {
    image.addEventListener("click", (e) => {
      e.preventDefault();
      image.classList.add("active");

      optionimg.forEach((image1, index1) => {
        console.log(image1, index1);
        index !== index1 && image1.classList.remove("active");
      });
      let imgsrc = e.target.querySelector("img").src;
      userresult.src = imgsrc;
    });
  });

  return (
    <React.Fragment>
      <div className="container">
        <div className="show">
          <div className="input">
            <div className="userinp">
              <img src={user} alt="user" />
            </div>
            <div className="cpuinp">
              <img src={cpu} alt="cpu" />
            </div>
          </div>
          <h3 id="result">let's play</h3>
          <div className="inp">
            <InpTake name={rock} text="rock" />
            <InpTake name={paper} text="paper" />
            <InpTake name={scissors} text="scissors" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

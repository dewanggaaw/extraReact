import React, { Component } from "react";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="body">
          <div className="kepala">
            <h1>Dewangga Aditya</h1>
            <h2>React Native Developer</h2>
          </div>
          <div className="profile">
            <img class="profimg" src="../Assets/Images/angga2.jpg" alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

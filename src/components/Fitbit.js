import React, { Component } from "react";
import axios from "axios";

class Fitbit extends Component {
  state = {
    results: {}
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <h1>Fitbit Data</h1>
      </div>
    );
  }
}

export default Fitbit;

import React, { Component } from "react";
import Palette from "./Components/Palette.js";
import seedColors from "./Components/seedColors.js";

class App extends Component {
  render() {
    return <Palette {...seedColors[4]} />;
  }
}

export default App;

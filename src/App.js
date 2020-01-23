import React, { Component } from "react";
import Palette from "./Components/palette";
import seedColors from "./Components/seedColors.js";

class App extends Component {
  render() {
    return <Palette {...seedColors[4]} />;
  }
}

export default App;

import React, { Component } from "react";
import Palette from "./Components/Palette.js";
import seedColors from "./Components/seedColors.js";
import { generatePalette } from "./Components/colorHelpers.js";

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />;
      </div>
    );
  }
}

export default App;

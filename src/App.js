import React from "react";
import importLazy from "./utilities/DynamicImport";
const lib = importLazy(() => import("./utilities/lib"));

console.log("lib", lib);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.importLib = this.importLib.bind(this);
  }

  importLib() {
    const { status, getData } = lib.call();
    console.log("status", status);
    console.log("getData", getData);
  }

  render() {
    return (
      <div className="flex">
        <h1>Dynamic Import</h1>
        <button onClick={this.importLib}>Import</button>
      </div>
    );
  }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="row">
      <button className="pa-6 font-bold col-1 sm-col-12">Click me</button>
      <button className="pa-6 font-bold col-3 sm-col-12">Click me</button>
      <button className="pa-6 font-bold col-2 sm-col-12">Click me</button>
      <button className="pa-6 font-bold col-12 sm-col-12">Click me</button>
      <button className="pa-6 font-bold col-2 sm-col-12">Click me</button>
      <button className="pa-6 font-bold col-2 sm-col-12">Click me</button>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));

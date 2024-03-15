import React from "react";
import SideBar from "./Components/SIdeBar/SideBar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header title='Overview'/>
      <SideBar />
    </div>
  );
}

export default App;

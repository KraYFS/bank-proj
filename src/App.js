import React from "react";
import SideBar from "./Components/SIdeBar/SideBar";
import Header from "./Components/Header/Header";
import MyCardsSection from "./Components/MyCards/MyCards";

function App() {
  return (
    <div className="App">
      <Header title='Overview' />
      <SideBar />
      <main>
        <MyCardsSection />
      </main>
    </div>
  );
}

export default App;

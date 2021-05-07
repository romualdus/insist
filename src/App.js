import React from "react";

import Header from "./components/sections/Header";
import Videos from "./components/sections/Videos";
import People from "./components/sections/People";
import Documents from "./components/sections/Documents";
import Activity from "./components/sections/Activity";
import Channels from "./components/sections/Channels";
import Footer from "./components/sections/Footer";

import "./styles/style.scss";

export default function App() {
  return (
    <>
      <Header />
      <div className="container container--main">
        <main>
          <Videos />
          <People />
          <Documents />
        </main>
        <aside>
          <Activity />
          <Channels />
        </aside>
      </div>
      <Footer />
    </>
  );
}

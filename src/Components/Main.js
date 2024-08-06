import "./css/main.css";
import Header from "./Header";
import Nav from "./Nav";
import Maincontent from "./Maincontent";
import { useState } from "react";
const Main = () => {
  const [open, setopen] = useState(true);
  const openMenu = () => {
    setopen(!open);
  };

  return (
    <>
      <main className="main">
        <Header openMenu={openMenu} />
        {open && <Nav />}
        <Maincontent />
      </main>
    </>
  );
};

export default Main;

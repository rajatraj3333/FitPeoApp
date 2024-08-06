import { useEffect } from "react";
import "./css/nav.css";
import { home, chart, task, wallets, report } from "./icons/type";

const Nav = () => {
  return (
    <>
      <nav className="nav-menu">
        <div className="nav-menus">
          <div className="home">{home}</div>

          <div className="task">{task}</div>
          <div className="wallet">{wallets}</div>
          <div className="report">{report}</div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

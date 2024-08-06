import "./css/header.css";
const Header = ({ openMenu }) => {
  return (
    <>
      <header>
        <h2 onClick={() => openMenu()} className="hamburger-menu">
          <img src="./hamburger-menu-svgrepo-com1.svg" />
        </h2>
        <div className="input-box">
          <img src="./search-svgrepo-com.svg" className="seacrch-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="icon-avatar">
          <div className="icon-box1">
            <img src="./message-svgrepo-com.svg" className="icons-size" />
          </div>
          <div className="icon-box2">
            <img src="./setting-4-svgrepo-com.svg" className="icons-size" />
          </div>
          <div className="icon-box3">
            <span className="bell-notification-badge"></span>
            <img src="./bell-svgrepo-com.svg" className="icons-size" />
          </div>
          <div className="icon-box4">4</div>
        </div>
      </header>
    </>
  );
};

export default Header;

import "./css/maincontent.css";
import Ordersummary from "./Ordersummary";
import Activity from "./Activity";
import Recentorder from "./Recentorder";
const Maincontent = () => {
  return (
    <>
      <main className="main-content">
        <h1 className="main-content-header">Dashboard</h1>
        <Ordersummary />
        <Activity />
        <Recentorder />
      </main>
    </>
  );
};
export default Maincontent;

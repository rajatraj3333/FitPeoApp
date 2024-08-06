import "./css/ordersummary.css";
import { Progress } from "antd";
const Ordersummary = () => {
  return (
    <>
      <div className="order-summary-container">
        <div className="all-section">
          <div className="sec1">
            <div className="order-summary-icons1">
              <div className="order-summary-icons-img1">
                <img src="./shopping-cart-round-1137-svgrepo-com.svg" />
                <div className="plus">
                  <p>+</p>
                </div>
              </div>
            </div>
            <span className="desc">Total Orders</span>
            <div className="numbers1">
              <span>75</span>
              <span>
                <img src="./arrow-up-svgrepo-com.svg" />3
              </span>
            </div>
          </div>
          <div className="sec2">
            <div className="order-summary-icons2">
              <div className="order-summary-icons-img2">
                <img src="./shopping-bag-commerce-and-shopping-svgrepo-com.svg" />
              </div>
            </div>
            <span className="desc">Total Delivered</span>
            <div className="numbers2">
              <span>70</span>
              <span>
                <img src="./arrow-down-square-svgrepo-com.svg" />3
              </span>
            </div>
          </div>
          <div className="sec3">
            <div className="order-summary-icons3">
              <div className="order-summary-icons-img3">
                <img src="./shopping-bag-delete-svgrepo-com.svg" />
              </div>
            </div>
            <span className="desc">Total Cancelled</span>
            <div className="numbers3">
              <span>05</span>
              <span>
                <img src="./arrow-up-svgrepo-com.svg" />3
              </span>
            </div>
          </div>
          <div className="sec4">
            <div className="order-summary-icons4">
              <div className="order-summary-icons-img4">
                <img src="./dollar-square-svgrepo-com.svg" />
              </div>
            </div>
            <span className="desc">Total Revenue</span>
            <div className="numbers4">
              <span>$12K</span>
              <span>
                <img src="./arrow-down-square-svgrepo-com.svg" />3
              </span>
            </div>
          </div>
        </div>
        <div className="profit-summary">
          <div className="net-profit">
            <h3>Net Profit</h3>
            <h3>$6759</h3>
            <div className="net-container">
              <img src="./arrow-up-svgrepo-com.svg" />
              <span className="profit-percentage">3</span>
            </div>
          </div>
          <div className="chart">
            <Progress
              type="dashboard"
              percent={70}
              gapDegree={0}
              trailColor="hsla(237, 78%, 64%, 0.33)"
              size={100}
              strokeColor={"hsla(220, 98%, 63%, 0.823)"}
              status="Goal Complete"
              strokeWidth={12}
            />
            <span style={{ fontSize: "11.7px", marginTop: "10px" }}>
              *The value here has been rounded off
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordersummary;

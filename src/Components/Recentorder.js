import "./css/recentorder.css";
import { Rate } from "antd";
const Recentorder = () => {
  const RecentTable = () => {
    return (
      <table className="recent-table">
        <tr>
          <th>Customer</th>
          <th>Order No.</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td className="td-space">
            <img src="./pexels-olly-762080.jpg" alt="no" className="Cimg" />
            <p> Wade Warren</p>
          </td>
          <td>15478256</td>
          <td>$124.00</td>
          <td>Delivered</td>
        </tr>
        <tr>
          <td className="td-space">
            <img
              src="./pexels-hasibullah-zhowandai.jpg"
              alt="no"
              className="Cimg"
            />
            <p> Jane Cooper</p>
          </td>
          <td>48965786</td>
          <td>$365.02</td>
          <td>Delivered</td>
        </tr>
        <tr>
          <td className="td-space">
            <img
              src="./pexels-chetanvlad-2923156.jpg"
              alt="no"
              className="Cimg"
            />
            <p> Guy Hawkins</p>
          </td>
          <td>78958215</td>
          <td>$45.88</td>
          <td>Cancelled</td>
        </tr>
        <tr>
          <td className="td-space">
            <img
              src="./pexels-mkvisuals-2897045.jpg"
              alt="no"
              className="Cimg"
            />
            <p> Kristin Watson</p>
          </td>
          <td>20965732</td>
          <td>$65.00</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td className="td-space">
            <img
              src="./pexels-moose-photos-170195-1586996.jpg"
              alt="no"
              className="Cimg"
            />
            <p>Code Fisher</p>
          </td>
          <td>95715620</td>
          <td>$545.00</td>
          <td>Delivered</td>
        </tr>
        <tr>
          <td className="td-space">
            <img
              src="./pexels-andre-furtado-43594-1263986.jpg"
              alt="no"
              className="Cimg"
            />
            <p>Savannah Nguyen</p>{" "}
          </td>
          <td>78514568</td>
          <td>$128.20</td>
          <td>Delivered</td>
        </tr>
      </table>
    );
  };

  return (
    <>
      <div className="recent-order-wrapper">
        <div className="recent-order">
          <h3
            style={{
              fontSize: "25px",
              marginLeft: "30px",
              marginTop: "10px",
              color: "ghostwhite",
            }}
          >
            Recent Order
          </h3>
          <RecentTable />
        </div>
        <div className="feedback">
          <h3
            style={{
              marginBottom: "10px",
              marginLeft: "10px",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            Customer's Feedback
          </h3>
          <div className="feed-back-container">
            <div className="avatar-name">
              <img
                src="./pexels-hasibullah-zhowandai.jpg"
                className="avatar-img"
              />
              <span style={{ marginTop: "10px" }}>Jenny Wilson</span>
            </div>
            <div className="rating">
              <Rate disabled defaultValue={3} value={3} />
            </div>
            <div className="feedback-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          {/* 2 */}

          <div className="feed-back-container">
            <div className="avatar-name">
              <img
                src="./pexels-chetanvlad-2923156.jpg"
                className="avatar-img"
              />
              <span style={{ marginTop: "10px" }}>Jenny Wilson</span>
            </div>
            <div className="rating">
              <Rate allowHalf disabled defaultValue={2} value={2.5} />
            </div>
            <div className="feedback-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          {/* 3 */}
          <div className="feed-back-container">
            <div className="avatar-name">
              <img
                src="./pexels-andre-furtado-43594-1263986.jpg"
                className="avatar-img"
              />
              <span style={{ marginTop: "10px" }}>Jenny Wilson</span>
            </div>
            <div className="rating">
              <Rate
                disabled
                defaultValue={3}
                value={4}
                style={{ accentColor: "red" }}
              />
            </div>
            <div className="feedback-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recentorder;

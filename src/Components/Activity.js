import { Chart as ChartJS, registerables } from "chart.js";
import { useEffect } from "react";
import "./css/activity.css";
import { Bar } from "react-chartjs-2";

const Activity = () => {
  const BarChart = () => {
    ChartJS.register(...registerables);
    const labels = [
      "5",
      "9",
      "11",
      "13",
      "15",
      "19",
      "21",
      "23",
      "25",
      "27",
      "29",
      "31",
      "33",
      "35",
      "37",
      "39",
      "41",
      "42",
      "45",
      "49",
      "51",
      "53",
      "57",
    ];
    const data = {
      labels: labels,
      weight: 15,
      min: 10,

      datasets: [
        {
          backgroundColor: "hsla(220, 98%, 63%, 0.823)",
          borderColor: "rgb(255, 99, 132)",
          barThickness: 16,

          data: [
            1, 5, 10, 15, 10, 12, 3, 8, 15, 6, 1, 5, 10, 15, 10, 12, 3, 8, 15,
            6, 8, 11, 12, 3, 8, 15, 6,
          ],
        },
      ],
    };
    return (
      <Bar
        data={data}
        className="barChartWidth"
        width={"700px"}
        height={"180px"}
        style={{ display: "flex", justifyContent: "flex-end" }}
      />
    );
  };
  return (
    <>
      <div className="activity-wrapper">
        <div className="activity-chart">
          <div className="barChart">
            <BarChart />
          </div>
        </div>
        <div className="activity-tracker">
          <section className="act-sec-1">
            <span className="goal-icons icons-layout">
              <img src="./shooting-target-svgrepo-com.svg" />
              <p style={{ marginLeft: "10px" }}>Goals</p>
            </span>

            <span className="icons2">
              <p>&gt;</p>
            </span>
          </section>
          <section className="act-sec-2">
            {/* burger-svgrepo-com */}
            <span className="dishes-icons icons-layout">
              <img src="./burger-svgrepo-com.svg" />
              <p style={{ marginLeft: "10px" }}>Popular Dishes</p>
            </span>

            <span className="icons2">
              <p>&gt;</p>
            </span>
          </section>
          <section className="act-sec-3">
            {/* waiter-svgrepo-com */}
            <span className="menus-icons icons-layout">
              <img src="./waiter-svgrepo-com.svg" />
              <p style={{ marginLeft: "10px" }}>Popular Dishes</p>
            </span>

            <span className="icons2">
              <p>&gt;</p>
            </span>
          </section>
        </div>
      </div>
    </>
  );
};

export default Activity;

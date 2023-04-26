import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { name: "Morning", value: 90, fill: "#0088FE" },
    { name: "Afternoon", value: 90, fill: "#00C49F" },
    { name: "Evening", value: 90, fill: "#FFBB28" },
    { name: "Night", value: 90, fill: "#FF8042" },
    ,
  ]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const fetchData = async (key) => {
    try {
      let response = await fetch(`http://localhost:3500/${key}`);
      let data = await response.json();
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <div className="header-buttons">
          <button onClick={() => fetchData("instagram")}>Instagram</button>
          <button onClick={() => fetchData("youtube")}>YouTube</button>
        </div>

        <div className="evening">Evening</div>
        <div className="morning">Morning</div>
        <div className="night">Night</div>
        <div className="afternoon">Afternoon</div>
        <div className="chart">
          <PieChart width={200} height={200}>
            <Pie
              //   isAnimationActive={false}
              data={data}
              startAngle={-45}
              endAngle={360}
              cx={95}
              cy={95}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="cross"></div>
      </div>
    </div>
  );
}

export default App;

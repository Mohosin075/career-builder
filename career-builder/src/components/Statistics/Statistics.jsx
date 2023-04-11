import React, { useEffect, useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const Statistics = ({ children }) => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetch("marks.json")
      .then((res) => res.json())
      .then((data) => setMarks(data));
  }, [marks]);

  return (
    <div>
      <SubHeader data={children}></SubHeader>
      <div className="px-4 2xl:px-72 xl:px-20 w-full py-16">
        {
          <AreaChart width={1000} height={400} data={marks}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="mark"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        }
      </div>
    </div>
  );
};

export default Statistics;

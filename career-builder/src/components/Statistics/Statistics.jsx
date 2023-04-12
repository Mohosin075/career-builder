import React, { useEffect, useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const Statistics = ({ children }) => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetch("marks.json")
      .then((res) => res.json())
      .then((data) => setMarks(data));
  }, []);

  let total = 0;
  marks && marks.map(mark=>{
    total = total + mark.mark
  })

  const averagre = (total/marks.length).toFixed(2);

  return (
    <div>
      <SubHeader data={children}></SubHeader>
      <div className="px-4 2xl:px-72 xl:px-20 w-full py-16">
        <div className="mb-10">
          <h2 className="text-center text-4xl font-bold">Assignment Analytics</h2>
          <h4 className="text-center text-xl mt-3 font-semibold text-[#7E90FE]">Average Marks : {averagre}</h4>
        </div>
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

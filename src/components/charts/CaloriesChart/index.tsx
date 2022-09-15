import { Box } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CaloriesChart: React.FC<Props> = ({ className, dataChart }) => {
  return (
    <Box className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="calories_per_hour" fill="#8884d8" />
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

interface Props {
  className?: string;
  dataChart: object[];
}

export default CaloriesChart;

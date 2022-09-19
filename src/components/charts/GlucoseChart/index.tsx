import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState, useCallback } from "react";
import { Box } from "@mui/material";

const GlucoseChart: React.FC<Props> = ({ className, dataChart }) => {
  const [opacity, setOpacity] = useState({
    uv: 1,
    pv: 1,
  });
  const [data, setData] = useState(dataChart);

  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o;

      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity]
  );

  const handleMouseLeave = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );

  return (
    <Box className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Legend
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="pv"
            strokeOpacity={opacity.pv}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="uv"
            strokeOpacity={opacity.uv}
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

interface Props {
  className?: string;
  dataChart: object[];
}

export default GlucoseChart;

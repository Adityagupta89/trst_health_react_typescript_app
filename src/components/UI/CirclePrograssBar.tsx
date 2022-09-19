import { Box } from "@mui/material";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBar: React.FC<Props> = ({ style, data }) => {
  return (
    <Box
      sx={{
        width: style.width ? style.width : "50px",
        height: style.height ? style.height : "50px",
      }}
    >
      <Box style={{ display: "flex" }}>
        <Box style={{ width: "100%" }}>
          <CircularProgressbar
            value={data.percentage}
            text={`${data.text ? data.text : `${data.percentage}%`}`}
            styles={buildStyles({
              textColor: style.textColor ? style.textColor : "black",
              pathColor: style.pathColor ? style.pathColor : "#29b529",
              trailColor: style.trailColor ? style.trailColor : "#c4c4c4",
            })}
          />
        </Box>
      </Box>
    </Box>
  );
};
interface Props {
  data: {
    percentage: number;
    text?: string;
  };
  style: {
    width?: string;
    height?: string;
    textColor?: string;
    pathColor?: string;
    trailColor?: string;
  };
}
export default CircularBar;

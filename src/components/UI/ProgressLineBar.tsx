import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)((props: Props) => ({
  height: props.height,
  width: props.width,
  borderRadius: props.borderRadius,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "light",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: props.borderRadius,
    backgroundColor: props.barColor,
  },
}));

const CustomizedProgressBars: React.FC<Props> = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant="determinate"
        value={props.value}
        borderRadius={props.borderRadius}
        barColor={props.barColor}
        height={props.height}
        width={props.width}
      />
    </Box>
  );
};
interface Props {
  borderRadius: string;
  barColor: string;
  value: number;
  height: string;
  width: string;
}

export default CustomizedProgressBars;

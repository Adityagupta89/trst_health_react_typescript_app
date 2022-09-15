import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Overview from "../../pages/Overview";
import TrackerDiet from "../../pages/TrackerDiet";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const tabStyle = {
  width: "20%",
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Tabbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={tabStyle} label="Overview" {...a11yProps(0)} />
          <Tab sx={tabStyle} label="Vitals" {...a11yProps(1)} />
          <Tab sx={tabStyle} label="Trackers" {...a11yProps(2)} />
          <Tab sx={tabStyle} label="Care Program" {...a11yProps(3)} />
          <Tab sx={tabStyle} label="Progress Note" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Vitals
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TrackerDiet />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Care Program
      </TabPanel>
      <TabPanel value={value} index={4}>
        Progress Note
      </TabPanel>
    </Box>
  );
};

export default Tabbar;

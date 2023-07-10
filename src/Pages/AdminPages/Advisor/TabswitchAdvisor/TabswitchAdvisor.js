import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TabswitchAdvisor.scss";
import Filters from "../Filters/Filters";
import Directory from "../Directory/Directory";

function TabPanel(props) {
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabswitchAdvisor(props) {
  const { setSearchAdviser, searchAdviser, page, setPage } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="col-sm-12 padding_advisor pt-3">
      <Box sx={{ width: "100%" }}>
        {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Adviser Management" {...a11yProps(0)} />
            <Tab label="Seller Management" {...a11yProps(1)} />
            <Tab label="Buyer Management" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}> */}
        <div className="col-sm-12 p-0">
          <Filters setSearchAdviser={setSearchAdviser} />
        </div>
        <div className="col-sm-12 p-0">
          <Directory
            searchAdviser={searchAdviser}
            setPage={setPage}
            page={page}
          />
        </div>
        {/* </TabPanel>
        <TabPanel value={value} index={1}>
          <span style={{ color: "black" }}> My Advior</span>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <span style={{ color: "black" }}> Request</span>
        </TabPanel> */}
      </Box>
    </div>
  );
}

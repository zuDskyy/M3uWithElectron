import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ChannelContext from "../../context/useChannelContext";
import { Link } from "react-router-dom";

const Channel = () => {
  const listdata = useContext(ChannelContext);
  const [state, setState] = React.useState({
    right: false,
  });

  //list

  const [searchTerm, setSearchTerm] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
        background: "#453a94",
        height:"100vh"
      }}
      role="presentation"
    >
      <List sx={{ background: "#453a94" }}>
        <form>
          <input
            type="search"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="search"
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "12px",
              outline: "none",
              border: "none",
            }}
          />
        </form>
        {listdata
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.tvname
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((item) => (
            <div key={item.id}>
              <ListItem
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "10px",
                  borderBottom: "1px solid black",
                  
                }}
              >
                <h4 style={{ paddingTop: "12px", color: "white" }}>
                  {item.id}
                </h4>
                <Link to={`${item.id}`}>
                <ListItemButton sx={{ width: "100%" }}  onClick={toggleDrawer(anchor, false)}>
                  
                    <ListItemText
                      sx={{ width: "100%", color: "white" }}
                      primary={item.tvname}
                    />
                  
                </ListItemButton>
                </Link>
              </ListItem>
            </div>
          ))}
        <Divider />
      </List>
    </Box>
  );
  return (
    <div style={{ paddingLeft: "20em", margin: "20px" }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            sx={{ color: "white", border: "1px solid #09203f" }}
            onClick={toggleDrawer(anchor, true)}
          >
            Channel List
          </Button>
          <Drawer
            anchor={"left"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Channel;

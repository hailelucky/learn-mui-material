import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import {
  Home,
  Person2,
  Group,
  Pages,
  Settings,
  ModeNight,
} from "@mui/icons-material";

export const SideBar = ({ mode, setMode }) => {
  const list = [
    {
      icon: <Home />,
      label: "Homepage",
    },
    {
      icon: <Pages />,
      label: "Pages",
    },
    {
      icon: <Group />,
      label: "Groups",
    },
    {
      icon: <Person2 />,
      label: "Friends",
    },
    {
      icon: <Settings />,
      label: "Settings",
    },
    {
      icon: <Home />,
      label: "Homepage",
    },
  ];

  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          {list?.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item?.icon}</ListItemIcon>
                <ListItemText primary={item?.label} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => {
                  mode === "light" ? setMode("dark") : setMode("light");
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

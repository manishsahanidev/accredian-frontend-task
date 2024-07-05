import { MenuItem, Button, Menu } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="px-5 py-4 lg:py-0">
      <Button
        className="text-sm"
        id="courses-button"
        aria-controls={open ? "courses-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{ width: "116px", height: "40px" }}
      >
        Courses
      </Button>
      <Menu
        id="courses-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "courses-button",
        }}
      >
        <MenuItem onClick={handleClose}>Course 1</MenuItem>
        <MenuItem onClick={handleClose}>Course 2</MenuItem>
        <MenuItem onClick={handleClose}>Course 3</MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;

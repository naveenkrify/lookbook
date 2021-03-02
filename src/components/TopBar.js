import Grid from "@material-ui/core/Grid";
import {
  BsFillArchiveFill,
  BsFillBriefcaseFill,
  BsFillCalendarFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import { FaMobileAlt, FaHammer, FaSave } from "react-icons/fa";
import { IoBan } from "react-icons/io5";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NestedMenuItem from "material-ui-nested-menu-item";
export default function TopBar({
  onChangeBox = (f) => f,
  handleUndo = (f) => f,
  handleSave = (f) => f,
}) {
  //Handlig Menu
  const [menuPosition, setMenuPosition] = React.useState(null);
  const [savePosition, setSavePosition] = React.useState(null);
  const handleMenuClick = (event) => {
    // if (menuPosition) {
    //   return;
    // }
    setMenuPosition({
      top: event.pageY,
      left: event.pageX - 130,
    });
  };
  const handleSaveClick = (event) => {
    setSavePosition({
      top: event.pageY,
      left: event.pageX,
    });
    handleSave();
  };
  const handleItemClick = (event) => {
    setMenuPosition(null);

    console.log("BUTTON HAS CLICKED");
    console.log(event.currentTarget.id, "CURRENT TARGET ID");
    onChangeBox(event.currentTarget.id.toString());
  };
  return (
    <>
      <Grid
        container
        item
        direction="row"
        lg={12}
        sm={12}
        xs={12}
        md={12}
        style={{ border: "1px solid black", marginBottom: "1%" }}
      >
        <Grid item lg={10} sm={10} xs={10} md={10}>
          <IconButton>
            <BsFillArchiveFill
              style={{ color: "green" }}
              onClick={() => handleUndo()}
            />
          </IconButton>
        </Grid>

        <Grid container item lg={2} sm={2} xs={2} md={2} style={{}}>
          <Grid item lg={3} sm={3} xs={3} md={3}>
            <IconButton>
              <FaMobileAlt style={{ color: "red" }} />
            </IconButton>
          </Grid>
          <Grid item lg={3} sm={3} xs={3} md={3}>
            <IconButton>
              <FaHammer
                style={{ color: "red" }}
                aria-controls="build-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
              />
              <Menu
                id="build-menu"
                anchorReference="anchorPosition"
                anchorPosition={menuPosition}
                open={Boolean(menuPosition)}
                onClose={() => setMenuPosition(null)}
              >
                <NestedMenuItem
                  label="1 Per Page"
                  parentMenuOpen={menuPosition}
                >
                  <MenuItem onClick={handleItemClick} id="7">
                    1 Photo Each
                  </MenuItem>
                  <MenuItem onClick={handleItemClick} id="8">
                    2 Photo Each
                  </MenuItem>
                  <MenuItem onClick={handleItemClick} id="9">
                    3 Photo Each
                  </MenuItem>
                  <MenuItem onClick={handleItemClick} id="10">
                    4 Photo Each
                  </MenuItem>
                </NestedMenuItem>
                <NestedMenuItem
                  label="2 Per Page"
                  parentMenuOpen={menuPosition}
                >
                  <MenuItem onClick={handleItemClick} id="5">
                    1 Photo Each
                  </MenuItem>
                  <MenuItem onClick={handleItemClick} id="6">
                    2 Photo Each
                  </MenuItem>
                </NestedMenuItem>

                <NestedMenuItem
                  label="3 Per Page"
                  parentMenuOpen={menuPosition}
                >
                  <MenuItem onClick={handleItemClick} id="3">
                    1 Photo Each
                  </MenuItem>
                  <MenuItem onClick={handleItemClick} id="4">
                    2 Photo Each
                  </MenuItem>
                </NestedMenuItem>
                <NestedMenuItem
                  label="4 Per Page"
                  parentMenuOpen={menuPosition}
                >
                  <MenuItem onClick={handleItemClick} id="2">
                    1 Photo Each
                  </MenuItem>
                </NestedMenuItem>
                <NestedMenuItem
                  label="6 Per Page"
                  parentMenuOpen={menuPosition}
                >
                  <MenuItem onClick={handleItemClick} id="1">
                    1 Photo Each
                  </MenuItem>
                </NestedMenuItem>
              </Menu>
            </IconButton>
          </Grid>
          <Grid item lg={3} sm={3} xs={3} md={3}>
            <IconButton>
              <FaSave
                style={{ color: "red" }}
                aria-controls="save-menu"
                aria-haspopup="true"
                onClick={handleSaveClick}
              />
              {/* <Menu
                id="save-menu"
                anchorReference="anchorPosition"
                anchorPosition={savePosition}
                open={Boolean(savePosition)}
                onClose={() => setSavePosition(null)}
              >
                <MenuItem onClick={handleItemClick}>Save</MenuItem>
                <MenuItem onClick={handleItemClick}>Save</MenuItem>
              </Menu> */}
            </IconButton>
          </Grid>
          <Grid item lg={3} sm={3} xs={3} md={3}>
            <IconButton>
              <IoBan style={{ color: "red" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

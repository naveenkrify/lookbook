import Grid from "@material-ui/core/Grid";
import { DriveEtaTwoTone } from "@material-ui/icons";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { IoIosHammer, IoMdHammer } from "react-icons/io";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";

export default function ArtistBox6({ item, smallRectangle = (f) => f }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [size, setSize] = useState("100%");
  console.log(item, "ITEM");

  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = (id) => {
    console.log(id, "ID");
    setAnchorEl(null);
    smallRectangle(id);
  };

  //////////////////////////////END/////////////////////////////////////////

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Grid
      item
      container
      direction="row"
      lg={6}
      sm={6}
      xs={6}
      md={6}
      style={{ height: "600px", border: "2px solid black" }}
    >
      <Grid
        item
        direction="column"
        lg={6}
        sm={6}
        xs={6}
        md={6}
        style={{
          height: "50%",
          border: "1px solid green",
          textAlign: "center",
        }}
      >
        <IconButton style={{ position: "absolute", zIndex: "2" }}>
          <IoMdHammer
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Small Square</MenuItem>
          <MenuItem onClick={handleClose}>Large Square</MenuItem>
          <MenuItem
            onClick={() => {
              return handleClose2(item.id);
            }}
          >
            Small Rectangle
          </MenuItem>
          <MenuItem onClick={handleClose}>Large Rectangle</MenuItem>
          <MenuItem onClick={handleClose}>Rotate 90degrees</MenuItem>
        </Menu>

        <img
          src={item.default_image}
          height={"83%"}
          width={"63%"}
          style={{ border: "2px solid black", borderRadius: "15px" }}
        />
      </Grid>

      {/* 2nd grid */}
      <Grid
        item
        direction="column"
        lg={6}
        sm={6}
        xs={6}
        md={6}
        style={{
          height: "50%",
          border: "1px solid green",
          textAlign: "center",
        }}
      >
        <IconButton style={{ position: "absolute", zIndex: "2" }}>
          <IoMdHammer
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Small Square</MenuItem>
          <MenuItem onClick={handleClose}>Large Square</MenuItem>
          <MenuItem
            onClick={() => {
              return handleClose2(item.id);
            }}
          >
            Small Rectangle
          </MenuItem>
          <MenuItem onClick={handleClose}>Large Rectangle</MenuItem>
          <MenuItem onClick={handleClose}>Rotate 90degrees</MenuItem>
        </Menu>

        <img
          src={item.default_image}
          height={"83%"}
          width={"63%"}
          style={{ border: "2px solid black", borderRadius: "15px" }}
        />
      </Grid>

      <Grid
        item
        container
        direction="column"
        lg={12}
        sm={12}
        xs={12}
        md={12}
        style={{
          height: "7%",
          border: "1px solid green",
          textAlign: "center",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            width: "70%",
            backgroundColor: "#ff1552",
            borderRadius: "5px",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <span>
            <MuiThemeProvider theme={theme}>
              <Typography variant="body1">
                <Box fontWeight="fontWeightMedium" style={{ color: "white" }}>
                  {item.firstname + " " + item.lastname}
                </Box>
              </Typography>
            </MuiThemeProvider>
          </span>
        </div>
      </Grid>
      <Grid
        item
        lg={12}
        sm={12}
        xs={12}
        md={12}
        style={{ height: "30%", display: "flex" }}
      >
        <div
          style={{
            border: "1px solid black",
            marginLeft: "10%",
          }}
        >
          <div>
            <span>
              <MuiThemeProvider theme={theme}>
                <Typography variant="p">
                  <Box>Age: {item.Age}</Box>
                </Typography>
              </MuiThemeProvider>
            </span>
          </div>
          <div>
            <span>
              <MuiThemeProvider theme={theme}>
                <Typography variant="p">
                  <Box>Height: {item.height}</Box>
                </Typography>
              </MuiThemeProvider>
            </span>
          </div>
          <div>
            <span>
              <MuiThemeProvider theme={theme}>
                <Typography variant="p">
                  <Box>Collar: {item.collar}</Box>
                </Typography>
              </MuiThemeProvider>
            </span>
          </div>
          <div>
            <span>
              <MuiThemeProvider theme={theme}>
                <Typography variant="p">
                  <Box>Bust: {item.bust}</Box>
                </Typography>
              </MuiThemeProvider>
            </span>
          </div>
        </div>
        {/* 2nd Grid */}
        <div
          style={{
            border: "1px solid black",
            marginLeft: "10%",
          }}
        >
          <div>
            <span>
              <MuiThemeProvider theme={theme}>
                <Typography variant="p">
                  <Box>Waist: {item.waist}</Box>
                </Typography>
              </MuiThemeProvider>
            </span>
          </div>
          <div>
            <span>
              <MuiThemeProvider theme={theme}>
                <Typography variant="p">
                  <Box>Hip: {item.hip}</Box>
                </Typography>
              </MuiThemeProvider>
            </span>
          </div>
          <div>
            <span>
              <MuiThemeProvider theme={theme}>
                <Typography variant="p">
                  <Box>Dress: {item.dress_size}</Box>
                </Typography>
              </MuiThemeProvider>
            </span>
          </div>
          <div>
            <span>
              <MuiThemeProvider theme={theme}>
                <Typography variant="p">
                  <Box>Shoe: {item.shoe}</Box>
                </Typography>
              </MuiThemeProvider>
            </span>
          </div>
        </div>
      </Grid>
      <Grid
        item
        container
        direction="column"
        lg={12}
        sm={12}
        xs={12}
        md={12}
        style={{
          height: "10%",
          border: "1px solid green",
        }}
      >
        <textarea
          placeholder={"notes"}
          style={{ width: "70%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
}

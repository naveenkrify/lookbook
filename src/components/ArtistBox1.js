import Grid from "@material-ui/core/Grid";
import { DriveEtaTwoTone } from "@material-ui/icons";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { IoIosHammer, IoMdHammer } from "react-icons/io";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";

export default function ArtistBox1({ item, smallRectangle = (f) => f }) {
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
      lg={4}
      sm={4}
      xs={4}
      md={4}
      style={{ height: "300px" }}
    >
      <Grid
        item
        container
        lg={12}
        sm={12}
        xs={12}
        md={12}
        style={{ height: "90%" }}
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

        <Grid
          item
          lg={6}
          sm={6}
          xs={6}
          md={6}
          style={{
            height: item.size,
            border: "2px solid black",
            borderRadius: "20px",
            textAlign: "center",
          }}
          spacing={4}
          justify="center"
          alignItems="center"
        >
          <img
            src={item.default_img}
            style={{ marginTop: "3%" }}
            height={"93%"}
            width={"93%"}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          lg={6}
          sm={6}
          xs={6}
          md={6}
          style={{ height: "100%" }}
        >
          <Grid item lg={12} sm={12} xs={12} md={12} style={{ height: "70%" }}>
            <div style={{ height: "100%", width: "100%" }}>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">Age: {item.Age}</Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">
                        Height: {item.Height}
                      </Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">
                        Collar: {item.Collar}
                      </Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">Bust: {item.Bust}</Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">
                        Waist: {item.Waist}
                      </Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">Hip: {item.Hip}</Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">
                        Dress: {item.Dress}
                      </Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">Shoe: {item.Shoe}</Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item lg={12} sm={12} xs={12} md={12} style={{ height: "30%" }}>
            <textarea
              placeholder={"notes"}
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        sm={12}
        xs={12}
        md={12}
        style={{ height: "10%" }}
        justify="center"
        alignItems="center"
      >
        <div>
          <span>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">
                <Box fontWeight="fontWeightMedium">{item.name}</Box>
              </Typography>
            </ThemeProvider>
          </span>
        </div>
      </Grid>
    </Grid>
  );
}

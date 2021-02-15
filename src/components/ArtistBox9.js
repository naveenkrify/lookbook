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

export default function ArtistBox9({ item, smallRectangle = (f) => f }) {
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

  //////////////////////////////END/////////////////////////////////////

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Grid
      item
      container
      direction="row"
      style={{
        height: "600px",
      }}
    >
      <Grid item container lg={1} sm={1} xs={1} md={1}></Grid>
      <Grid
        item
        container
        lg={10}
        sm={10}
        xs={10}
        md={10}
        style={{
          display: "grid",
          height: "100%",
          gridTemplateRows: "60% 8% 32%",
        }}
      >
        {/* Images grid */}
        <Grid
          item
          container
          lg={12}
          sm={12}
          xs={12}
          md={12}
          direction="row"
          style={{ height: "100%" }}
        >
          <Grid
            item
            container
            lg={4}
            sm={4}
            xs={4}
            md={4}
            style={{
              height: "100%",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {/* Image 1 */}

            <img
              src={item.default_image}
              style={{
                border: "2px solid black",
                borderRadius: "15px",
                height: "93%",
                width: "73%",
              }}
            />
          </Grid>
          <Grid
            item
            container
            lg={4}
            sm={4}
            xs={4}
            md={4}
            style={{
              textAlign: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {/* Image 2 */}
            <img
              src={item.default_image}
              style={{
                border: "2px solid black",
                borderRadius: "15px",
                height: "93%",
                width: "73%",
              }}
            />
          </Grid>
          <Grid
            item
            container
            lg={4}
            sm={4}
            xs={4}
            md={4}
            style={{
              textAlign: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {/* Image 3 */}
            <img
              src={item.default_image}
              style={{
                border: "2px solid black",
                borderRadius: "15px",
                height: "93%",
                width: "73%",
              }}
            />
          </Grid>
        </Grid>
        {/* Name Grid */}
        <Grid item container lg={12} sm={12} xs={12} md={12}>
          <div
            style={{
              border: "1px solid black",
              width: "70%",
              height: "70%",
              backgroundColor: "#ff1552",
              borderRadius: "5px",
              textAlign: "center",
              alignSelf: "center",
              marginLeft: "14%",
            }}
          >
            <span>
              <ThemeProvider theme={theme}>
                <Typography variant="body1">
                  <Box fontWeight="fontWeightMedium" style={{ color: "white" }}>
                    {item.firstname + " " + item.lastname}
                  </Box>
                </Typography>
              </ThemeProvider>
            </span>
          </div>
        </Grid>
        {/* Details and Notes */}
        <Grid item container lg={12} sm={12} xs={12} md={12}>
          {/* Details Grid */}
          <Grid item lg={7} sm={7} xs={7} md={7}>
            <div style={{ height: "100%", width: "100%", marginLeft: "10%" }}>
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
          {/* Notes Grid */}
          <Grid item lg={5} sm={5} xs={5} md={5}>
            <textarea
              placeholder={"notes"}
              style={{ width: "80%", height: "80%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container lg={1} sm={1} xs={1} md={1}></Grid>
    </Grid>
  );
}

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
        border: "2px solid black",
      }}
    >
      <Grid
        item
        container
        lg={1}
        sm={1}
        xs={1}
        md={1}
        style={{ border: "2px solid green" }}
      ></Grid>
      <Grid
        item
        container
        lg={10}
        sm={10}
        xs={10}
        md={10}
        direction="row"
        style={{
          border: "2px solid green",
          display: "grid",
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
          style={{ border: "2px solid blue" }}
        >
          <Grid
            item
            container
            lg={4}
            sm={4}
            xs={4}
            md={4}
            style={{
              border: "2px solid pink",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {/* Image 1 */}
            <Grid item style={{ border: "2px solid red" }}>
              <img
                src={item.default_image}
                style={{
                  border: "2px solid black",
                  borderRadius: "15px",
                  height: "93%",
                  width: "93%",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            lg={4}
            sm={4}
            xs={4}
            md={4}
            style={{
              border: "2px solid pink",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {/* Image 2 */}
            <Grid item style={{ border: "2px solid red" }}>
              <img
                src={item.default_image}
                style={{
                  border: "2px solid black",
                  borderRadius: "15px",
                  height: "93%",
                  width: "93%",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            lg={4}
            sm={4}
            xs={4}
            md={4}
            style={{
              border: "2px solid pink",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {/* Image 3 */}
            <Grid item style={{ border: "2px solid red" }}>
              <img
                src={item.default_image}
                style={{
                  border: "2px solid black",
                  borderRadius: "15px",
                  height: "93%",
                  width: "93%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Name Grid */}
        <Grid
          item
          container
          lg={12}
          sm={12}
          xs={12}
          md={12}
          style={{ border: "2px solid blue" }}
        >
          {item.firstname + " " + item.lastname}
        </Grid>
        {/* Details and Notes */}
        <Grid
          item
          container
          lg={12}
          sm={12}
          xs={12}
          md={12}
          style={{ border: "2px solid blue" }}
        >
          {/* Details Grid */}
          <Grid
            item
            lg={7}
            sm={7}
            xs={7}
            md={7}
            style={{ border: "2px solid red" }}
          >
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
                        Height: {item.height}
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
                        Collar: {item.collar}
                      </Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">Bust: {item.bust}</Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">
                        Waist: {item.waist}
                      </Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">Hip: {item.hip}</Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">
                        Dress: {item.dress_size}
                      </Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
              <div>
                <span>
                  <ThemeProvider theme={theme}>
                    <Typography variant="p">
                      <Box fontWeight="fontWeightMedium">Shoe: {item.shoe}</Box>
                    </Typography>
                  </ThemeProvider>
                </span>
              </div>
            </div>
          </Grid>
          {/* Notes Grid */}
          <Grid
            item
            lg={5}
            sm={5}
            xs={5}
            md={5}
            style={{ border: "2px solid red" }}
          >
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
        lg={1}
        sm={1}
        xs={1}
        md={1}
        style={{ border: "2px solid green" }}
      ></Grid>
    </Grid>
  );
}

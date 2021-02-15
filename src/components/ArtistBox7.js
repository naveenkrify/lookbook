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

export default function ArtistBox7({ item, smallRectangle = (f) => f }) {
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
      lg={12}
      sm={12}
      xs={12}
      md={12}
      style={{
        height: "450px",
      }}
    >
      <Grid
        item
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
        <img
          src={item.default_image}
          height={"93%"}
          width={"80%"}
          style={{
            border: "1px solid black",
            borderRadius: "15px",
          }}
        />
      </Grid>

      <Grid item container lg={8} sm={8} xs={8} md={8}>
        <Grid
          item
          container
          lg={12}
          sm={12}
          xs={12}
          md={12}
          direction="row"
          style={{
            display: "grid",
            gridTemplateRows: "10% 50% 40%",
          }}
        >
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
            md={12}
            style={{
              textAlign: "center",
              display: "grid",
              alignItems: "end",
            }}
          >
            <div
              style={{
                border: "1px solid black",
                width: "70%",
                backgroundColor: "#ff1552",
                borderRadius: "5px",
              }}
            >
              <span>
                <ThemeProvider theme={theme}>
                  <Typography variant="body1">
                    <Box
                      fontWeight="fontWeightMedium"
                      style={{ color: "white" }}
                    >
                      {item.firstname + " " + item.lastname}
                    </Box>
                  </Typography>
                </ThemeProvider>
              </span>
            </div>
          </Grid>

          <Grid
            item
            container
            lg={12}
            sm={12}
            xs={12}
            md={12}
            style={{ width: "70%" }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                marginLeft: "1%",
                padding: "1%",
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
          <Grid item lg={12} sm={12} xs={12} md={12}>
            <textarea
              placeholder={"notes"}
              style={{ width: "70%", height: "80%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

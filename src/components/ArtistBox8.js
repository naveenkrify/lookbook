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

export default function ArtistBox8({ item, smallRectangle = (f) => f }) {
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
        height: "600px",
        border: "2px solid black",
      }}
    >
      <Grid
        item
        container
        lg={5}
        sm={5}
        xs={5}
        md={5}
        style={{ border: "1px solid red" }}
      >
        <Grid item container lg={12} sm={12} xs={12} md={12}>
          <Grid
            item
            container
            lg={6}
            sm={6}
            xs={6}
            md={6}
            style={{
              textAlign: "center",
              border: "1px solid pink",
              justifyItems: "center",
            }}
          >
            <img
              src={item.default_image}
              style={{
                textAlign: "center",
                height: "93%",
                width: "93%",
              }}
            />
          </Grid>
          <Grid
            item
            container
            lg={6}
            sm={6}
            xs={6}
            md={6}
            style={{ border: "1px solid pink" }}
          >
            <img
              src={item.default_image}
              style={{
                textAlign: "center",
                height: "93%",
                width: "93%",
                border: "1px solid yellow",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={7}
        sm={7}
        xs={7}
        md={7}
        style={{ border: "4px solid black" }}
      >
        <Grid item container direction="row" lg={12} sm={12} xs={12} md={12}>
          {/* Arist name */}
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
            md={12}
            style={{ border: "5px solid green",justifyContent:"center",alignItems:"center",display:"flex" }}
          >
            <div style={{}}>{item.firstname +" "+ item.lastname}</div>
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
            md={12}
            style={{ border: "5px solid yellow" }}
          >
            {/* Artist details */}
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
                        <Box fontWeight="fontWeightMedium">
                          Bust: {item.bust}
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
                        <Box fontWeight="fontWeightMedium">
                          Shoe: {item.shoe}
                        </Box>
                      </Typography>
                    </ThemeProvider>
                  </span>
                </div>
              </div>

          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
            md={12}
            style={{ border: "5px solid pink" }}
          >
            <textarea
          placeholder={"notes"}
          style={{ width: "100%", height: "100%" }}
        />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

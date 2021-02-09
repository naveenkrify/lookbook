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
        height: "600px",
        border: "2px solid black",
      }}
    >
      <Grid
        item
        lg={4}
        sm={4}
        xs={4}
        md={4}
        style={{
          border: "2px solid green",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={item.default_image}
          height={"93%"}
          width={"93%"}
          style={{
            border: "2px solid black",
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
          direction="column"
          style={{ border: "2px solid green" }}
        >
          <Grid item style={{ border: "2px solid red", textAlign: "center" }}>
            <Typography variant="h5">{item.firstname}</Typography>
          </Grid>
          <Grid item>
            <Grid
              item
              lg={10}
              sm={10}
              xs={10}
              md={10}
              style={{ border: "1px solid black" }}
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

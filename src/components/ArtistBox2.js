import Grid from "@material-ui/core/Grid";
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

export default function ArtistBox2({ item, smallRectangle = (f) => f }) {
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

  //////////////////////////////END////////////////////////////////

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <Grid
        item
        container
        direction="row"
        lg={6}
        sm={6}
        xs={6}
        md={6}
        style={{ height: "300px" }}
      >
        {/* inner full width */}
        {/* {console.log(col_sizes[box_type], "BOX TYPE2")} */}
        <Grid
          item
          container
          lg={12}
          sm={12}
          xs={12}
          md={12}
          style={{ height: "90%" }}
        >
          <IconButton
            style={{
              position: "absolute",
              zIndex: "2",
              border: "1px solid green",
              marginTop: "10px",
              marginLeft: "30px",
            }}
          >
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
          {/* Image Grid */}
          <Grid
            item
            lg={6}
            sm={6}
            xs={6}
            md={6}
            style={{
              height: "100%",
              textAlign: "center",
              border: "1px solid red",
            }}
            spacing={4}
            justify="center"
            alignItems="center"
          >
            <img
              src={item.default_image}
              style={{
                marginTop: "3%",
                border: "1px solid black",
                borderRadius: "15px",
              }}
              height={"93%"}
              width={"75%"}
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
            <Grid
              item
              lg={12}
              sm={12}
              xs={12}
              md={12}
              style={{
                height: "70%",
                border: "1px solid green",
                display: "flex",
              }}
            >
              <div
                style={{
                  border: "1px solid red",
                  alignSelf: "flex-end",
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
                        <Box>Bust: {item.Bust}</Box>
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
            <Grid
              item
              lg={12}
              sm={12}
              xs={12}
              md={12}
              style={{ height: "30%" }}
            >
              <textarea
                placeholder={"notes"}
                style={{ width: "70%", height: "93%" }}
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
                  <Box fontWeight="fontWeightMedium">{item.firstname}</Box>
                </Typography>
              </ThemeProvider>
            </span>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

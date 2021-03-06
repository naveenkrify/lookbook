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
export default function ArtistBox1({
  item,
  smallRectangle = (f) => f,
  modalOpen = (f) => f,
  imageModalOpen = (f) => f,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [size, setSize] = useState("100%");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = (id) => {
    setAnchorEl(null);
    smallRectangle(id);
  };
  const handleClose3 = (id, image, image_no) => {
    setAnchorEl(null);
    modalOpen(id, image, image_no);
  };
  const handleClose4 = (id, gridNO) => {
    setAnchorEl(null);
    imageModalOpen(id, gridNO);
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
      style={{
        height: "50vh",
        overflow: "auto",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Grid
        item
        container
        lg={12}
        sm={12}
        xs={12}
        md={12}
        style={{ height: "90%", marginTop: "0px" }}
      >
        <IconButton
          style={{
            position: "absolute",
            zIndex: "2",
            height: "7%",
            width: "5%",
            marginTop: "1.5%",
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
          <MenuItem
            onClick={() => {
              return handleClose4(item.artist_id, 1);
            }}
          >
            Add New Image
          </MenuItem>
          <MenuItem
            onClick={() => {
              return handleClose3(item.artist_id, item.image1, 1);
            }}
          >
            Crop Image
          </MenuItem>
        </Menu>

        <Grid
          item
          lg={6}
          sm={6}
          xs={6}
          md={6}
          style={{
            height: item.size,
            textAlign: "center",
            display: "flex",
          }}
          spacing={4}
        >
          {/* <IoAddCircleOutline
            style={{
              position: "absolute",
              zIndex: "2",
              height: "15%",
              width: "15%",
              marginTop: "5%",
            }}
          /> */}
          <img
            src={item.image1}
            style={{
              marginTop: "3%",
              border: "2px solid black",
              borderRadius: "15px",
              alignSelf: "flex-end",
            }}
            height={"93%"}
            width={"87%"}
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

              textAlign: "start",
              display: "flex",
            }}
          >
            <div
              style={{
                verticalAlign: "text-bottom",
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
            style={{
              height: "30%",
              textAlign: "left",
            }}
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
        style={{ height: "10%", marginTop: "2%" }}
        justify="center"
        alignItems="center"
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
                <Box fontWeight="fontWeightMedium" style={{ color: "white" }}>
                  {item.firstname + " " + item.lastname}
                </Box>
              </Typography>
            </ThemeProvider>
          </span>
        </div>
      </Grid>
    </Grid>
  );
}

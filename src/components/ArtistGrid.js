import Grid from "@material-ui/core/Grid";
import { DriveEtaTwoTone } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import { useState, useEffect } from "react";
import ArtistBox1 from "./ArtistBox1";
import ArtistBox2 from "./ArtistBox2";
import ArtistBox3 from "./ArtistBox3";
import ArtistBox4 from "./ArtistBox4";
import ArtistBox5 from "./ArtistBox5";
import ArtistBox6 from "./ArtistBox6";
import ArtistBox7 from "./ArtistBox7";
import ArtistBox8 from "./ArtistBox8";
import ArtistBox9 from "./ArtistBox9";
import ArtistBox10 from "./ArtistBox10";
import TopBar from "./TopBar";
import MyEditor from "./ImageCrop.js";
import React from "react";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function ArtistGrid() {
  // Image editor Modal Hooks
  const [modalStyle] = React.useState(getModalStyle); //Modal style hook
  const [open, setOpen] = React.useState(false); //Modal state open or close

  // Modal styles
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();

  //Modal Body
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <MyEditor />
      {/* <SimpleModal /> */}
    </div>
  );

  //Handling Modal open

  const modalOpen = (id) => {
    console.log(id);
    setOpen(true);
  };

  //Handling Modal close
  const modalClose = () => {
    setOpen(false);
  };
  console.log(window.page_props, "WINDOW");
  const smallReactangle = (id) => {
    console.log(id, "IIIDDD");
    const newData = Data.map((item) => {
      if (item.id === id) {
        return { ...item, id, size: "80%" };
      } else {
        return { ...item };
      }
    });
    setData(newData);
    console.log(newData);
  };
  let theme = createMuiTheme();

  theme = responsiveFontSizes(theme);
  const [Data, setData] = useState([]);
  const [BoxType, setBoxType] = useState(1);
  const onChangeBox = (b) => {
    setBoxType(parseInt(b));
  };
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");
  headers.append("GET", "POST", "OPTIONS");
  useEffect(() => {
    loadData();
  }, []);

  // Loading Data from the Maddog API
  const loadData = async () => {
    const res = await fetch("https://intranet.maddogcasting.com/app3/sample", {
      method: "GET",
      headers: headers,
    });
    const res_ = await res.json();
    setData(res_);
    console.log(res_);
  };
  // setData(myobj);
  return (
    <>
      <TopBar onChangeBox={onChangeBox} />
      {/* <MyEditor /> */}
      <div>
        {/* <button type="button" onClick={handleOpen}>
          Open Modal
        </button> */}
        <Modal
          open={open}
          onClose={modalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>

      {/* 6 per page 1 photo each */}
      {BoxType === 1 && (
        <Grid
          container
          spacing={3}
          style={{ textAlign: "center", padding: "0.5%" }}
        >
          {Data.map((item) => {
            return (
              <ArtistBox1
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
                modalOpen={modalOpen}
              />
            );
          })}
        </Grid>
      )}
      {/* 4 per page 1 photo each */}
      {BoxType === 2 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <ArtistBox2
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
              />
            );
          })}
        </Grid>
      )}
      {/* 3 per page 1 photo each */}
      {BoxType === 3 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <ArtistBox3
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
              />
            );
          })}
        </Grid>
      )}
      {/* 3 per page 2 photo each */}
      {BoxType === 4 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <ArtistBox4
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
              />
            );
          })}
        </Grid>
      )}
      {/* 2per page 1 photo each */}
      {BoxType === 5 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <ArtistBox5
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
              />
            );
          })}
        </Grid>
      )}
      {/* 2per page 2 photo each */}
      {BoxType === 6 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <ArtistBox6
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
              />
            );
          })}
        </Grid>
      )}
      {/* 1 per page 1 photo each */}
      {BoxType === 7 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <ArtistBox7
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
              />
            );
          })}
        </Grid>
      )}
      {/* 1 per page 2 photos each */}
      {BoxType === 8 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <ArtistBox8
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
              />
            );
          })}
        </Grid>
      )}

      {/* 1 per page 3 photos each */}
      {BoxType === 9 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <ArtistBox9
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
              />
            );
          })}
        </Grid>
      )}

      {/* 1 per page 4 photos each */}
      {BoxType === 10 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <ArtistBox10
                item={item}
                smallRectangle={smallReactangle}
                box_type={BoxType}
              />
            );
          })}
        </Grid>
      )}
    </>
  );
}

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
import ImagesModal from "./ImagesModal";

export default function ArtistGrid() {
  const useModalStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const modal_classes = useModalStyles();
  // Image editor Modal Hooks
  // const [modalStyle] = React.useState(getModalStyle); //Modal style hook
  const [open, setOpen] = React.useState(false); //Modal state open or close
  const [imageSelect, setImageSelect] = React.useState(false); //Image selection model open or close
  const [modalImage, setModalImage] = React.useState(null);
  const [imageNo, setImageNo] = React.useState(null); //Image box number (1-6)
  const [artistID, setArtistID] = React.useState(null); //selected artist id for image crop

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
  const upadteImage = (img) => {
    const newData = Data.map((item) => {
      if (item.artist_id === artistID) {
        return { ...item, default_image: img };
      } else {
        return { ...item };
      }
    });
    setData(newData);
    setOpen(false);
    setImageSelect(false);
  };

  var img_url =
    "data:image/jpeg;base64,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";
  //Image editor modal body
  const editor_modal_body = (
    <div className={classes.paper} style={{ border: "1px solid black" }}>
      <MyEditor
        img={modalImage}
        artistID={artistID}
        imageNo={imageNo}
        upadteImage={upadteImage}
      />
    </div>
  );

  //Handling Modal open

  const modalOpen = (id, image, image_no) => {
    console.log(image, "IMAGE");
    setOpen(true);
    setArtistID(id);
    setImageNo(image_no);
    setModalImage(image);
  };

  //Handling Modal close
  const modalClose = () => {
    setOpen(false);
  };

  //Handling Image select model open
  const imageModalOpen = (id, gridNO) => {
    console.log(id, "Artist ID");
    setArtistID(id);
    setImageNo(gridNO);
    setImageSelect(true);
  };

  //Handling Image select modle close
  const imageModalClose = () => {
    setImageSelect(false);
  };

  //Images modal body
  const images_modal_body = (
    <div style={{ backgroundColor: "white", border: "1px solid black" }}>
      <ImagesModal
        artistID={artistID}
        gridNO={imageNo}
        upadteImage={upadteImage}
      />
    </div>
  );
  console.log(window.page_props, "WINDOW");
  const smallReactangle = (id) => {
    const newData = Data.map((item) => {
      if (item.id === id) {
        return { ...item, id, size: "80%" };
      } else {
        return { ...item };
      }
    });
    setData(newData);
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
    const new_data = res_.map((item) => {
      var arr = new Uint8Array(item.default_image);
      var raw = String.fromCharCode.apply(null, arr);
      // var b64 = base64.encode(raw);
      var b64 = raw.toString("base64");
      var dataURL = "data:image/png;base64," + b64;
      return { ...item, default_image: dataURL };
    });
    console.log(new_data, "NEW DATA");
  };
  // setData(myobj);
  return (
    <>
      <TopBar onChangeBox={onChangeBox} />
      {/* Image editor Modal */}
      <div>
        <Modal
          open={open}
          className={modal_classes.modal}
          onClose={modalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {editor_modal_body}
        </Modal>
      </div>

      {/* Image selection modal */}
      <div>
        <Modal
          open={imageSelect}
          className={modal_classes.modal}
          onClose={imageModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {images_modal_body}
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
                imageModalOpen={imageModalOpen}
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

import Grid from "@material-ui/core/Grid";
import { DriveEtaTwoTone } from "@material-ui/icons";
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
import TopBar from "./TopBar";
export default function ArtistGrid() {
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
      {/* {BoxType === 1 && (
        <Grid container spacing={3}>
          {Data.map((item) => {
            return <ArtistBox1 item={item} smallRectangle={smallReactangle} />;
          })}
        </Grid>
      )}
      {BoxType != 1 && <p>You have selected different {BoxType}</p>} */}

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
    </>
  );
}

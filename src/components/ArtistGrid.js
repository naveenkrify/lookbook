import Grid from "@material-ui/core/Grid";
import { DriveEtaTwoTone } from "@material-ui/icons";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import { useState } from "react";
import ArtistBox1 from "./ArtistBox1";
import ArtistBox2 from "./ArtistBox2";
import ArtistBox3 from "./ArtistBox3";
import ArtistBox4 from "./ArtistBox4";
import ArtistBox5 from "./ArtistBox5";
import ArtistBox6 from "./ArtistBox6";
import ArtistBox7 from "./ArtistBox7";
import ArtistBox8 from "./ArtistBox8";
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
  const myobj = [
    {
      name: "veeru",
      id: 1,
      Age: 25,
      Height: 6,
      Collar: 78,
      Chest: 5,
      Waist: "red",
      Hip: "5cm",
      Dress: "green",
      Shoe: 3.1,
      Bust: 3,
      default_img:
        "https://d2g0qi9nm3z3ds.cloudfront.net/attachment/8b/97/52/814f57ab440d3ccded2e4dee26_200x200.jpg?Expires=1611745646&Signature=CxGpm1jsfTRLcyh6YZsgiocJprQPpEbUxT6R5nzLESAVurvZp~yGnd93ZSg-hvv~k9hiHJgO11tvewshKI~9LA18oShEmvlR5h5Eu0lQ3rP0BPXO2Qxm5pRGQW4NG84Yo9vB-vVrd4si19PsRBgN10YUDmtRVQ~W8ARgFDJoLOsGJnWCBrcmWFR9EhcEy5-uuDK~MGePYdkv~ou1JukKJ31zW1vvwxU2TnQDKb2~p3XUCH3zcSdW-Tntfp40mz-UXtzgQxtSLMeUKH9zzYBAbPik4xT8wNBYhndQXRyxIg5fvjoi97Q8AvsG9G~mUVpauAlfHhiD1Z9LGgNlg8yyFQ__&Key-Pair-Id=APKAJ753FGHVP7RXE4AQ",
      size: "100%",
    },
    {
      name: "naveen",
      id: 2,
      Age: 55,
      Height: 6,
      Collar: 78,
      Chest: 5,
      Waist: "red",
      Hip: "5cm",
      Dress: "green",
      Shoe: 3.1,
      Bust: 4,
      default_img:
        "https://www.collinsdictionary.com/images/full/artist_125937788.jpg",
      size: "100%",
    },
    {
      name: "siva",
      id: 3,
      Age: 99,
      Height: 6,
      Collar: 78,
      Bust: 5,
      Waist: "red",
      Hip: "5cm",
      Dress: "green",
      Shoe: 3.1,
      default_img:
        "https://www.collinsdictionary.com/images/full/artist_125937788.jpg",
      size: "100%",
    },
    {
      name: "sai",
      id: 4,
      Age: 8,
      Height: 6,
      Collar: 78,
      Bust: 5,
      Waist: "red",
      Hip: "5cm",
      Dress: "green",
      Shoe: 3.1,
      default_img:
        "https://www.collinsdictionary.com/images/full/artist_125937788.jpg",
      size: "100%",
    },
    {
      name: "suresh",
      id: 5,
      Age: 78,
      Height: 6,
      Collar: 78,
      Chest: 5,
      Waist: "red",
      Hip: "5cm",
      Dress: "green",
      Shoe: 3.1,
      Bust: 6,
      default_img:
        "https://www.collinsdictionary.com/images/full/artist_125937788.jpg",
      size: "100%",
    },
    {
      name: "ganesh",
      id: 6,
      Age: 54,
      Height: 6,
      Collar: 78,
      Bust: 5,
      Waist: "red",
      Hip: "5cm",
      Dress: "green",
      Shoe: 3.1,
      default_img:
        "https://www.collinsdictionary.com/images/full/artist_125937788.jpg",
      size: "100%",
    },
    {
      name: "ganesh",
      id: 6,
      Age: 54,
      Height: 6,
      Collar: 78,
      Bust: 5,
      Waist: "red",
      Hip: "5cm",
      Dress: "green",
      Shoe: 3.1,
      default_img:
        "https://www.collinsdictionary.com/images/full/artist_125937788.jpg",
      size: "100%",
    },
  ];
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
  fetch("https://intranet.maddogcasting.com/app3/sample", {
    method: "GET",
    headers: headers,
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result, "RESULT");
      // setData(result);
      setData(myobj);
    })
    .catch((err) => console.log(err));
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
      {BoxType === 1 && (
        <Grid container spacing={3} style={{ textAlign: "center" }}>
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
    </>
  );
}

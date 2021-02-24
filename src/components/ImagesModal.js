import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
export default function ImagesModal({
  artistID,
  gridNO,
  upadteImage = (f) => f,
}) {
  console.log(artistID, "Artist ID from images Modal");
  const [Images, setImages] = useState(null);
  const loadData = async () => {
    const res = await fetch(
      "https://intranet.maddogcasting.com/app3/artist_images/" +
        artistID.toString(),
      {
        method: "GET",
      }
    );

    const res_ = await res.json();
    setImages(res_.images);
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log(Images, "Images Length");

  return (
    <>
      <Grid
        container
        style={{
          border: "5px solid green",
          height: "50vh",
          width: "50vw",
          overflow: "scroll",
        }}
      >
        {Images != null && (
          <Grid
            container
            spacing={3}
            direction={"row"}
            style={{ height: "100%", width: "100%" }}
          >
            {Images.map((attachment) => {
              return (
                <Grid
                  item
                  style={{ border: "1px solid black", height: "50%" }}
                  lg={4}
                  sm={4}
                  xs={4}
                  md={4}
                >
                  <img
                    src={attachment}
                    height={"100%"}
                    width={"100%"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      return upadteImage(attachment);
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
        {Images == 0 && (
          <div>
            <p>NO IMAGES TO SHOW</p>
          </div>
        )}
      </Grid>
    </>
  );
}

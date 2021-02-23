import React, { useState, useEffect } from "react";
export default function ImagesModal({ artistID }) {
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
    setImages(res_);
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log(Images);

  return (
    <>
      {Images != null && (
        <div>
          {Images.images.map((attachment) => {
            return (
              <img
                src={attachment}
                style={{ height: "250px", width: "250px" }}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

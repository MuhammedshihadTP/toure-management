import React from "react";
import galleryImages from "./galleryImages";


import Msonry, { ResponsiveMasonry } from "react-responsive-masonry";

function MasonryImagesGallery() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 786: 3, 992: 4 }}>
      <Msonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <img
           className="masnory__img"
            src={item}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Msonry>
    </ResponsiveMasonry>
  );
}

export default MasonryImagesGallery;

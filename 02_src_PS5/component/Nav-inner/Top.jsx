import React, { Component } from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import TopPs5 from "./imgas/topPs5.png";
import Handle from "./imgas/handle.png";
import Details from "./imgas/details.png";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function Top() {
  return (
    <Box>
      <Typography style={{ marginBottom: "10px" }}>
        このサイトでは、ソニーストアで販売している「プレイステーション®」商品をご案内しています。
      </Typography>
      <ImageList
        // sx={{ width: 712, height: 540 }}
        variant="quilted"
        cols={3}
        // rowHeight={400}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, item.rows, item.cols)}
              alt={item.title}
              //   style={{ objectFit: "cover" }}
              //   loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://www.sony.jp/playstation/module_images/B1_9/292_main.png",
    title: "Ps5",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.sony.jp/playstation/module_images/B1_9/297_main.png",
    title: "handle",
  },
  {
    img: "https://www.sony.jp/playstation/module_images/B1_9/07_main.png",
    title: "details",
  },
];

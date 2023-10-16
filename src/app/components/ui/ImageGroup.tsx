"use client";
import { Image } from "antd";
import React from "react";

const ImageGroup = () => {
  return (
    <>
      <Image.PreviewGroup preview={true}>
        <Image
          width={300}
          height={150}
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        />
        <div className="flex gap-2">
          <Image
            width={150}
            src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
          />{" "}
          <Image
            width={150}
            src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
          />
        </div>
      </Image.PreviewGroup>
    </>
  );
};

export default ImageGroup;

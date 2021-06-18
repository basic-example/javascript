import Image from "next/image";
import React from "react";

export default function RootPage(): JSX.Element {
  return (
    <div>
      <style jsx>
        {`
          .custom-image {
            border: solid 1px;
          }
        `}
      </style>
      <h1>Root Page</h1>
      <img className="custom-image" src="/150.png" alt="" />
      {/*
        <Image> element converted webp image extension
        <Image> element should add width,height or layout property
        <Image> element can't with css jsx. so we style parent of Image element
      */}
      <div className="custom-image">
        <Image
          className="custom-image"
          src="/150.png"
          alt=""
          width={150}
          height={150}
        />
      </div>
      <Image
        className="custom-image"
        src="https://via.placeholder.com/150"
        alt=""
        width={150}
        height={150}
      />
    </div>
  );
}

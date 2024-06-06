import React, { useState } from "react";
import {
  MdClose,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import Image from "next/image";

import { Dialog, IconButton } from "@mui/material";

import { Image as IImage } from "@/app/api-helpers";

export default function Gallery({
  flagGallery,
  setFlagGallery,
  images,
}: {
  flagGallery: boolean;
  setFlagGallery: (arg0: boolean) => void;
  images: IImage[];
}) {
  const [indexImage, setIndexImage] = useState(0);

  const handleClick = (side: string) => {
    let temp = indexImage;

    if (side === "left") {
      if (temp === 0) {
        temp = images.length - 1;
      } else {
        temp--;
      }
    } else {
      if (temp === images.length - 1) {
        temp = 0;
      } else {
        temp++;
      }
    }

    setIndexImage(temp);
  };

  const mainImage = images[indexImage].image;

  if (!mainImage) {
    return null;
  }

  return (
    <Dialog fullScreen open={flagGallery} onClose={() => setFlagGallery(false)}>
      {/* The Hole Section */}
      <div className="grid h-full grid-cols-1 grid-rows-[calc(80vh-32px)_20vh] gap-8 bg-black">
        {/* Main Image */}
        <div className="relative grid h-[calc(80vh-32px)] w-auto justify-items-center">
          {
            <Image
              className="object-contain"
              src={mainImage}
              alt="main"
              fill={true}
            />
          }
        </div>

        {/* List of Images */}
        <div className="grid grid-cols-5">
          {images.map((each, index) => {
            let isShowed = indexImage === index;
            if (!each.image) {
              return null;
            }
            return (
              <div className="relative h-[20vh] overflow-hidden">
                <Image
                  className={`cursor-pointer object-cover opacity-40 hover:opacity-70 ${
                    isShowed && "opacity-100"
                  }`}
                  src={each.image}
                  onClick={() => {
                    setIndexImage(index);
                  }}
                  alt={`slide ${index}`}
                  fill={true}
                  sizes={"420px"}
                />
              </div>
            );
          })}
        </div>

        {/* Icons */}
        <div className="absolute bottom-[calc(20vh+32px)] grid grid-cols-[repeat(3,min-content)] place-items-center gap-8 justify-self-center rounded-3xl px-8 py-4 ">
          {[
            [<MdOutlineKeyboardArrowLeft />, () => handleClick("left")],
            [<MdClose />, () => setFlagGallery(false)],
            [<MdOutlineKeyboardArrowRight />, () => handleClick("right")],
          ].map(([icon, handleClick]) => (
            <IconButton
              className="!bg-white !bg-opacity-30 !text-3xl !text-black !backdrop-blur-sm"
              onClick={handleClick as any}
            >
              {icon as React.ReactNode}
            </IconButton>
          ))}
        </div>
      </div>
    </Dialog>
  );
}

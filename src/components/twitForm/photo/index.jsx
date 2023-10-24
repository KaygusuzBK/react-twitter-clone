import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRef } from "react";

function PhotoPost({ images }) {
  const displayImages = images.slice(0, 4);
  const remainingCount = images.length - 4;

  const ımageRef = useRef(null);

  return (
    <div className="grid grid-cols-2 gap-0.5 mt-2 mb-2">
      {displayImages.map((image, index) => (
        <div
          key={index}
          className="relative group w-full h-48 rounded-md overflow-hidden"
        >
          <img
            ref={ımageRef}
            src={image}
            alt={`${index + 1}`}
            className="w-full h-full object-cover rounded border-2 border-white border-opacity-20"
            // onClick={() => console.log(ımageRef)}
          />

          {index === 3 && remainingCount > 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-75">
              <span className="text-white text-lg font-semibold">
                +{remainingCount}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PhotoPost;

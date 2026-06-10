import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const LazyImage = ({ url, alt }) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={url}
        alt={alt}
        width="100%"
        height="auto"
        className={`object-contain h-full transition-opacity duration-300 ${
          !url ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default LazyImage;

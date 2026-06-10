import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const LazyImage = ({ url, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      <img
        src={url}
        alt={alt}
        width="100%"
        height="auto"
        onLoad={() => {
          setIsLoading(false);
        }}
        className={`object-contain h-full transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default LazyImage;

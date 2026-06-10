import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        border: "4px solid #f3f3f3",
        borderTop: "4px solid #44e6ef",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default LoadingSpinner;

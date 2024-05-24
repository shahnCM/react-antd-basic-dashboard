import { Spin } from "antd";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        backgroundColor: "#f0f2f5", // Optional: Add a background color
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default LoadingSpinner;

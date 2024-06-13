import { Spin } from "antd";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "100vh", // Full viewport height
        maxWidth: "100vw", // Full viewport width
        backgroundColor: "transparent", // Optional: Add a background color
      }}
    >
      <Spin style={{flex: 1}} size="large" />
    </div>
  );
};

export default LoadingSpinner;

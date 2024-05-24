import React from "react";
import { getContent } from "../../controllers/ContentController";

const DashboardMenu_1: React.FC = () => {
  const data = getContent();

  return (
    <>
      <h1>{data.title} + 1</h1>
      <p>{data.content} + 1</p>
    </>
  );
};

export default DashboardMenu_1;

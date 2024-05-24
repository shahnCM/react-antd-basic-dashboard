import React from "react";
import { getContent } from "../../controllers/ContentController";

const DashboardMenu_2_1: React.FC = () => {
  const data = getContent();

  return (
    <>
      <h1>{data.title} + 2</h1>
      <p>{data.content} + 2</p>
    </>
  );
};

export default DashboardMenu_2_1;

// src/views/ContentView.tsx
import React from "react";
import { getContent } from "../controllers/ContentController";
import MainLayout from "../components/Layout/Authenticated/MainLayout";

const ContentPage2: React.FC = () => {
  const data = getContent();

  return (
    // <MainLayout>
      <div>
        <h1>{data.title} + 2</h1>
        <p>{data.content} + 2</p>
      </div>
    // </MainLayout>
  );
};

export default ContentPage2;

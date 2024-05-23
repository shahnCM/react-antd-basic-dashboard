// src/views/ContentView.tsx
import React from "react";
import { getContent } from "../controllers/ContentController";
import MainLayout from "../components/Layout/Authenticated/MainLayout";

const ContentPage1: React.FC = () => {
  const data = getContent();

  return (
    // <MainLayout>
      <div>
        <h1>{data.title} + 1</h1>
        <p>{data.content} + 1</p>
      </div>
    // </MainLayout>
  );
};

export default ContentPage1;

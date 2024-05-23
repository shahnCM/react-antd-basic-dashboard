// src/views/ContentView.tsx
import React from "react";
import { getContent } from "../controllers/ContentController";
import MainLayout from "../components/Layout/Authenticated/MainLayout";

const ContentPage: React.FC = () => {
  const data = getContent();

  return (
    // <MainLayout>
      <div>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </div>
    // </MainLayout>
  );
};

export default ContentPage;

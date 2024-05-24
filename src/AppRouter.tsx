import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContentPage from "./pages/dashboard/DashboardIndex";
import CommonLayout from "./components/Layout/Common/CommonLayout";
import MainLayout from "./components/Layout/Authenticated/AuthenticatedLayout";
import ContentPage1 from "./pages/dashboard/DashboardMenu_1";
import ContentPage2 from "./pages/dashboard/DashboardMenu_2_1";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard" element={<MainLayout />}>
            <Route index element={<ContentPage />} />
            <Route path="1" element={<ContentPage1 />} />
            <Route path="2" element={<ContentPage2 />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

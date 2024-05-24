import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LandingPage  = lazy(() => import("./pages/LandingPage"));
const ContentPage  = lazy(() => import("./pages/dashboard/DashboardIndex"));
const ContentPage1 = lazy(() => import("./pages/dashboard/DashboardMenu_1"));
const ContentPage2 = lazy(() => import("./pages/dashboard/DashboardMenu_2_1"));
const CommonLayout = lazy(() => import("./components/Layout/Common/CommonLayout"));
const MainLayout   = lazy(() => import("./components/Layout/Authenticated/AuthenticatedLayout"));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Spin size="large" style={{ textAlign: "center" }} />}>
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
      </Suspense>
    </Router>
  );
};

export default AppRouter;

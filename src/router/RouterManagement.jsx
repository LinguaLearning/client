import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRoutesWithoutLayout from "./PrivateRoutesWithoutLayout";
import { AuthProvider } from "../context/AuthContext";
import {
  HomePageView,
  AboutPageView,
  PricingPageView,
  OurIdeologyPageView,
  LoginPageView,
  SignUpPageVIew,
  ForgotPassword,
  DashboardPageView,
  DashboardTools,
  DashboardResources,
  MyProfile,
  UserSettings,
  LessonView,
} from "../views";
import { Layout } from "../components";

const RouterManagement = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePageView />} />
            <Route path="about" element={<AboutPageView />} />
            <Route path="pricing" element={<PricingPageView />} />
            <Route path="ideology" element={<OurIdeologyPageView />} />
            <Route path="*" element={<h1>Error 404</h1>} />
          </Route>

          <Route path="login" element={<LoginPageView />} />
          <Route path="signup" element={<SignUpPageVIew />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />

          <Route path="dashboard" element={<PrivateRoutes />}>
            <Route path="learning" element={<DashboardPageView />} />
            <Route path="tools" element={<DashboardTools />} />
            <Route path="resources" element={<DashboardResources />} />
            <Route path="my_profile" element={<MyProfile />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>

          <Route path="dashboard" element={<PrivateRoutesWithoutLayout />}>
            {/* <Route path="lesson" element={<LessonView />}></Route> */}
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default RouterManagement;

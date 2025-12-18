import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Meetings from "./pages/Meetings";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";
import Attendance from "./pages/Attendance";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Topbar from "./components/userdashboard/Topbar/Topbar"
import Header from "./components/Meeting/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* User dashboard with a different Topbar */}
        <Route
          path="/user-dashboard"
          element={
            <MainLayout TopbarComponent={Topbar}>
              <div className="  w-full h-full">
                <UserDashboard />
              </div>
            </MainLayout>
          }
        />

        {/* Other pages with default Topbar */}
        <Route
          path="/projects"
          element={
            <MainLayout TopbarComponent={Topbar}>
              <Projects />
            </MainLayout>
          }
        />
        <Route
          path="/tasks"
          element={
            <MainLayout TopbarComponent={Topbar}>
              <Tasks />
            </MainLayout>
          }
        />
        <Route
          path="/meetings"
          element={
            <MainLayout TopbarComponent={Header}>
              <Meetings />
            </MainLayout>
          }
        />
        <Route
          path="/chat"
          element={
            <MainLayout TopbarComponent={Topbar}>
              <Chat />
            </MainLayout>
          }
        />
        <Route
          path="/documents"
          element={
            <MainLayout TopbarComponent={Topbar}>
              <Documents />
            </MainLayout>
          }
        />
        <Route
          path="/attendance"
          element={
            <MainLayout TopbarComponent={Topbar}>
              <Attendance />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

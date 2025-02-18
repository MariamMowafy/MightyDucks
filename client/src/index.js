import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/UserProfile";
import UserFlights from "./pages/UserFlights";
import EditProfile from "./components/EditProfile";
import Booking from "./pages/BookingV";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ReservedFlight from "./pages/ReservedFlightsDetails";
import "./index.css"


ReactDOM.render(
  <Router>
    <ToastContainer />
    <Box sx={{ m: -1, overflowX: "hidden" }}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='home' element={<Home />} />
          <Route path='user' element={<User />} />
          <Route path='user/flights' element={<UserFlights />} />
          <Route path='user/modify/:id' element={<EditProfile />} />
          <Route path='home/booking/:id' element={<Booking />} />
          <Route path='user/flights/itinerary' element={<ReservedFlight />} />
        </Routes>
      </ThemeProvider>
    </Box>
  </Router>,
  document.getElementById("root")
);
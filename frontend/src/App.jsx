
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CustomerRegister from "./Home/Customer/CustomerRegister";
import CustomerLogin from "./Home/Customer/CustomerLogin";
import DriverRegister from "./Home/Driver/DriverRegister";
import DriverLogin from "./Home/Driver/DriverLogin";
import CabRegister from "./Home/Cab/CabRegister";
import Booking from "./Home/Booking/Booking";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/customer/register" element={<CustomerRegister />} />
        <Route path="/customer/login" element={<CustomerLogin />} />

        <Route path="/driver/register" element={<DriverRegister />} />
        <Route path="/driver/login" element={<DriverLogin />} />

        <Route path="/cab/register" element={<CabRegister />} />

        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

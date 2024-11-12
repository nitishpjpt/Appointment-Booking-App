import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Appointment from "./pages/Appointment";
import Footer from "./components/Footer";
import Register from './components/Register'

const App = () => {
  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/doctors" element={<Doctor />}></Route> {/*All doctors*/}
          <Route path="/doctors/:speciality" element={<Doctor />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/my-appointments" element={<MyAppointments />}></Route>
          <Route path="/MyProfile" element={<MyProfile />}></Route>
          <Route path="/appointment/:docId" element={<Appointment/>}></Route>
        </Routes>
        <Footer/>
      </>
    </div>
  );
};

export default App;

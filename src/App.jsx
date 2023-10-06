import { BrowerRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowerRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowerRouter>
  );
}

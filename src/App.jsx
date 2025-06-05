import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

import { Home, Register, Notifikasi, Report, Login } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Tambah Aja Route Halaman lain dibawah */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notifikasi" element={<Notifikasi />} />
      <Route path="/report" element={<Report />} />
      <Route path="/dashboard" element={<blank />} />
    </Routes>
  );
}

export default App;

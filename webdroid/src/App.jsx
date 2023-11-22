import { Home, Register, Notifikasi, Profile, Blank, ContentReport } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Tambah Aja Route Halaman lain dibawah */}
        <Route path="/Notifikasi" element={<Notifikasi />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="/report" element={<ContentReport />} />
      </Routes>
    </>
  );
}

export default App;

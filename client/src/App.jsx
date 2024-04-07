import FileUpload from "./components/Upload";
import TeamPage from "./components/TeamPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FileUpload />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import ResultsPage from "./components/Results";
import Favourites from "./components/Favourites";
import Player from "./components/Player";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/favourites" element={<Favourites />} />
        {/*  <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} /> */}
      </Routes>
      <Player />
    </BrowserRouter>
  );
}

export default App;

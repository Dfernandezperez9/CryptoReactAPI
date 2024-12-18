import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Coin from "./Coin";
import Favorites from "./Favorites";

function App() {
  return (
    <>
      <Router>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Coin/:id" element={<Coin />} />
            <Route path="/Favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
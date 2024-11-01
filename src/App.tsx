import { BrowserRouter, Routes, Route } from "react-router-dom";

// import global style
import "./Global.css";

// import pages
import Home from "./pages/Home";
import Search from "./pages/Search";

// import components
import Header from "./components/header/Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/buscar" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
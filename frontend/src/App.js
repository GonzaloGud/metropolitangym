import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";
import Nav from "./components/layout/Nav.js";

import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import CoachesPage from "./pages/CoachesPage"
import GalleryPage from "./pages/GalleryPage"

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter> 
       <Nav/>
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="Coaches" element={<CoachesPage/>} />
        <Route path="Gallery" element={<GalleryPage/>} />
        <Route path="ContactPage" element={<ContactPage/>} />
       </Routes>
      </BrowserRouter>
     
      <Footer/>
    </div>
  );
}

export default App;

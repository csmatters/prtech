import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import UserLayout from "./layout/userLayout"
import Home from "./pages/Home"
import Contact from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicePage"
import Internship from "./pages/Internship"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserLayout />}>
                {/* User Router */}
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact /> } />
                <Route path="/aboutus" element={<AboutPage /> } />
                <Route path="/services" element={<ServicesPage /> } />
                <Route path="/internship" element={<Internship /> } />
                
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


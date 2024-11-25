import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Books from "./pages/Books"
import Contacts from "./pages/Contacts"
import DefaultLayout from "./components/DefaultLayout"

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* routes here */}
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ChiSiamo from "./pages/Chi-siamo"
import Gallery from "./pages/Gallery"
import Contatti from "./pages/Contatti"
import Servizi from "./pages/Servizi"

const navigationItems = [
  { label: "Home", type: "route", target: "/" },
  { label: "Menu", type: "route", target: "/menu" },
  { label: "Chi siamo", type: "route", target: "/chi-siamo" },
  { label: "Gallery", type: "route", target: "/gallery" },
  { label: "Contatti", type: "route", target: "/contatti" },
  { label: "Servizi", type: "route", target: "/servizi" },
]

export default function App() {
  return (
    <HashRouter>
      <Layout navigationItems={navigationItems}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/servizi" element={<Servizi />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

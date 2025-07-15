import styled from "@emotion/styled"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Aside from "./components/Aside/Index"
import Search from "./pages/Search"

const Body = styled.div`
  display: flex;
  gap: 9vw;
  height: 100vh;
`

export default function Router() {
  return (
    <BrowserRouter>
      <Body>
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Body>
    </BrowserRouter>
  )
}
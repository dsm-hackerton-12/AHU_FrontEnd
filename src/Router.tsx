import {BrowserRouter, Routes, Route} from "react-router-dom"
import TopTextLayer from "./components/topTextLayer/TopTextLayer"
import RecommendKeywrod from "./components/recommendKeyword/RecommedKeyword"
import styled from "@emotion/styled"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Aside from "./components/Aside/Index"
import WordInfo from "./components/wordInfo/WordInfo"
import Search from "./pages/Search"

const Body = styled.div`
  display: flex;
  gap: 9vw;
  height: 100vh;
`

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/t" element={<TopTextLayer title="이선우" text="공부해" />} />
        <Route path="/r" element={<RecommendKeywrod />}></Route>
        <Route path="/" element={<Aside />} />
        <Route path="/w" element={<WordInfo />}></Route>
      </Routes>
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
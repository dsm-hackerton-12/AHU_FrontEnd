import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopTextLayer from "./components/topTextLayer/TopTextLayer";
import AsideLayout from "./components/Layout/AsideLayout";
import Profile from "./pages/MyPage";
import BarGraph from "./components/Graph/Index";
import Vote from "./pages/Vote";

const Body = styled.div`
  display: flex;
  gap: 9vw;
  height: 100vh;
`

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AsideLayout />} >
          <Route path="/My" element={<Profile />} />
          <Route path="/vote" element={<Vote />} />
        </Route>
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
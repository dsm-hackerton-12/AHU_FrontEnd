import { BrowserRouter, Routes, Route } from "react-router-dom"
import AsideLayout from "./components/Layout/AsideLayout";
import Profile from "./pages/MyPage";
import Vote from "./pages/Vote";
import Home from "./pages/home";
import Search from "./pages/Search";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AsideLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/My" element={<Profile />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
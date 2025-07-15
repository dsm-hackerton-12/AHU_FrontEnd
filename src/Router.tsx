import {BrowserRouter, Routes, Route} from "react-router-dom"
import TopTextLayer from "./components/topTextLayer/topTextLayer"


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/t" element={<TopTextLayer title="이선우" text="공부해" />} />
      </Routes>
    </BrowserRouter>
  )
}
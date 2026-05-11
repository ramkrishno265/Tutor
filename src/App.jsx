import { Routes, Route } from "react-router-dom"
import Layout from "../src/assets/Layout/Layout"

import Home from "../src/assets/Page/main_page"

function App() {
  return (
    <Routes>

      {/* Layout = Header always visible */}
      <Route path="/" element={<Layout />}>
        
        {/* Home page */}
        <Route index element={<Home />} />

      </Route>

    </Routes>
  )
}

export default App
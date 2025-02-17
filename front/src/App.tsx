import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AdminPage, Layout, MainPage } from "./lazy-pages/pages"

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}


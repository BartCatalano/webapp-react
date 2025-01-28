import { BrowserRouter , Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/appLayout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import DettailsPage from "./pages/DettailsPage";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
    <Route element={<AppLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviePage/>} />
    <Route path="/details/:id" element={<DettailsPage/>} /> 
    </Route>
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

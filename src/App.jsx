import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import RegionPage, { regionLoader } from "./pages/RegionPage";
import CountryPage, { countryLoader } from "./pages/CountryPage";
import SearchCountryPage, { searchLoader } from "./pages/SearchCountryPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/region/:id" element={<RegionPage />} loader={regionLoader} />
      <Route path="/country/:id" element={<CountryPage />}  loader={countryLoader} /> 
      <Route path="/search/:id" element={<SearchCountryPage />} loader={searchLoader} />  
      <Route path="*" element={<NotFoundPage />} />
    </Route>
    
  )
  );

  return  <RouterProvider router={router} />
}

export default App

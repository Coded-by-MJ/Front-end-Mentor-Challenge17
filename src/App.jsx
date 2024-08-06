import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";



import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import RegionPage from "./pages/RegionPage";
import CountryPage from "./pages/CountryPage";
import SearchCountryPage from "./pages/SearchCountryPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchCountryProvider from "./provider/SearchCountryProvider";


function App() {



  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage  />}/>
      <Route path="/region/:id" element={<RegionPage />} />
      <Route path="/country/:id" element={<CountryPage />} /> 
      <Route path="/search/:id" element={<SearchCountryPage />} />  
      <Route path="*" element={<NotFoundPage />} /> 
    </Route>
    
  )
  );

  return  (
       <SearchCountryProvider >
                <RouterProvider router={router} />
       </SearchCountryProvider>
  )
 
}

export default App

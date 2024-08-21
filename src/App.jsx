
import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
} from "@tanstack/react-router"



import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchCountryProvider from "./provider/SearchCountryProvider";


function App() {



  const rootRoute = createRootRoute({
    component: MainLayout,
 })

 const homeRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/',
   component: HomePage
 }) 
 const singleCountryRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/country/$id',
   component: CountryPage
 }) 


  const routeTree = rootRoute.addChildren([
    homeRoute, singleCountryRoute,

  ])


  
  const router = createRouter({ routeTree,
    defaultNotFoundComponent: NotFoundPage
  })


  return  (
       <SearchCountryProvider >
                <RouterProvider router={router} />
       </SearchCountryProvider>
  )
 
}

export default App

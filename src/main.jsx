import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root/Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Category/Dashboard'
import AllPropaties from './Category/AllPropaties'
import Customer from './Category/Customer'
import Statistic from './Category/Statistic'
// import App from './App.jsx'

const router = createBrowserRouter([
  {
      path:"/",
      
      element:<Root></Root>,
      children:[
        {
           path:"dashboard",
           element:<Dashboard></Dashboard>
        },
        {
          path: "allpropaties",
          loader: async () => {
            const response = await fetch('data.json');
            const data = await response.json();  // Parse the JSON
            return data;  // Return the data to be used in the component
          },
          element: <AllPropaties />
        },
        {
          path:"coustomer",
          element:<Customer></Customer>
        },
        {
          path:"staistic",
          element:<Statistic></Statistic>
        }
      ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
   
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './Sidebar';
import ErrorPage from "./Errorpage";
import Schedule from "./schedule";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Sidebar />,
    errorElement : <ErrorPage />,
      children: [
        {
          path:"/schedule",
          element: <Schedule />
        },]
  } 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

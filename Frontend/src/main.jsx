import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './Sidebar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    
  },
]);
/*children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },] */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

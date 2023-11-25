import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Main from './components/Main/Main.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

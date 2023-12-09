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
import Blog from './components/Blog/Blog.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import Home from './components/Home/Home.jsx';
import RecipeData from './components/RecipesData/RecipesData.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://recipe-info-server-side.vercel.app/recipes`)
      },
      {
        path:"recipes/:id",
        element:<ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`https://recipe-info-server-side.vercel.app/recipes/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

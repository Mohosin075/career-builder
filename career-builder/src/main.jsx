import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/LayOut/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFoundPage/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <NotFound></NotFound>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('allData.json'),
        // loader : ()=> fetch('tshits.json'),
      },
      {
        path : '/statistics',
        element : <Statistics>statistics</Statistics>
      },
      {
        path : '/applied',
        element : <AppliedJobs>Applied jobs</AppliedJobs>
      },
      {
        path : '/blog',
        element : <Blogs>blog</Blogs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

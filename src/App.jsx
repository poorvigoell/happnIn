import 'aos/dist/aos.css';
import AOS from 'aos';
import './index.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Workshop from './pages/Workshops';
import Hackathon from './pages/Hackathons';
import Competition from './pages/Competitions';
import Cultural from './pages/Culturalevents';
import Official from './pages/Collegeevents';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/workshops",
    element: <Workshop />, 
  },
  {
    path: "/hackathons",
    element: <Hackathon />, 
  },
  {
    path: "/competitions",
    element: <Competition />, 
  },
  {
    path: "/cultural",
    element: <Cultural />, 
  },
  {
    path: "/official-college",
    element: <Official />, 
  },
]);


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;

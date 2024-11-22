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
import Societies from './pages/Societies'; 
import Navbar from './components/Navbar'; // Ensure Navbar is imported

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
  {
    path: "/societies", 
    element: <Societies />, 
  },
]);

function App() {
  return (
    <>
      <Navbar /> {/* Navbar is always rendered */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Workshop from './pages/Workshops';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/workshops",
    element: <Workshop />, 
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

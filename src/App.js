import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Phone from './components/Phone/Phone';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/phones'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('http://localhost:5000/phones'),
          element: <Home></Home>
        },
        {
          path: '/phone/:id',
          element: <Phone></Phone>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

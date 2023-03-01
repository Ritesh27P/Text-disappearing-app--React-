import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GameOver from "./components/gameOver"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {path: "/", element:<App />},
  {path: "/gameOver", element:<GameOver />}
])
root.render(

  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  
);




reportWebVitals();

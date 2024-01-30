import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SobreMim from './component/sobremim/sobreMim';
import Projetos from './component/projetos/projetos';
import Contatos from './component/contatos/contatos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/sobreMim',
    element: <SobreMim />
  },
  {
    path:'/projetos',
    element: <Projetos />
  },
  {
    path:'/contato',
    element: <Contatos />
  }
]);

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

reportWebVitals();
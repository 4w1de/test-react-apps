import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './common/Home';
import { Details } from './common/Details';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    { path: '/details/:name', element: <Details /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="main-cont">
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>,
);

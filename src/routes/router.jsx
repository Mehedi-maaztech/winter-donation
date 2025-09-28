import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Donation from '../pages/Donation';
import Help from '../pages/Help';
import Dashboard from '../pages/Dashboard';
import CampaignDetails from '../component/CampaignDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('/campaignData.json')
    },
    {
        path: '/campaindetails/:id',
        element: <PrivateRoute><CampaignDetails></CampaignDetails></PrivateRoute>,
        // loader: ({params}) => fetch(`/campaignData.json/${params.id}`)
        loader: () => fetch('/campaignData.json')
    },
    {
        path: '/help',
        element: <Help></Help>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children : [
            {
                path: 'login',
                element: <Login></Login>
            },
            {   
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;
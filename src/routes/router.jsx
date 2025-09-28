import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Donation from '../pages/Donation';
import Help from '../pages/Help';
import Dashboard from '../pages/Dashboard';
import CampaignDetails from '../component/CampaignDetails';

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
        element: <CampaignDetails></CampaignDetails>,
        // loader: ({params}) => fetch(`/campaignData.json/${params.id}`)
        loader: () => fetch('/campaignData.json')
    },
    { 
        path: '/help', 
        element: <Help></Help>
    },
    { 
        path: '/dashboard', 
        element: <Dashboard></Dashboard>
    },
])

export default router;
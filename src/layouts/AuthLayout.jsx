import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import './global.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';
import StateHook from './Pages/StateHookPage/StateHook';
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import About from './Pages/About/About';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Users from './Pages/Users/Users';
import { UserPage } from './Pages/Users/UserPage';
import usersData from './data/users.json';


const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Welcome />} />
            <Route path='/statehooks' element={<StateHook />} />
            <Route path='/community' element={<Community />} />
            <Route path='resources' element={<Resources />} />
            <Route path='about' element={<About />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:id' loader={loader} element={<UserPage />} errorElement={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

function loader({ params }) {
    const users = usersData.filter(el => el.id === params.id);
    return users[0];
}


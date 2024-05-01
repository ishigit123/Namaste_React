import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import ErrorComp from './components/ErrorComp';
import Contact from './components/Contact';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import RestrauntMenu from './components/RestrauntMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () =>{
    return(
        <div className='AppBody'>
            <Header />
            <Outlet/>         {/* I want to render children acc to path -- if /about --> <about/> */}
        </div>
    )
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/",
                element:<Body/>,
            },
            {
                path : "/restraunt/:resId",
                element: <RestrauntMenu/>,
            },
        ],
        errorElement:<ErrorComp />,
    },
    

])
root.render(<RouterProvider router = {appRouter} />);
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Root from '../Root/Root';
import Allplants from '../Pages/Allplants/Allplants';
import Gardendecor from '../Pages/GardenDecor/Gardendecor';
import Contact from '../Pages/Contact/Contact';
import Signin from '../Pages/Login/Signin';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                index: true,
                element:<Home></Home>,
                loader: ()=> fetch('Products.json')
            },
            
        ]
        
    },
    {
        path: "/all-plants",
        element:<Allplants></Allplants>
    },
    {
        path: "/decoration",
        element: <Gardendecor></Gardendecor>
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    },
    {
        path: "/signin",
        element: <Signin></Signin>
    }

])

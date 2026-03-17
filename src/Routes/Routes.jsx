import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {index:true,Component:Home},
            {path:'login',Component:Login},
        ]

    }
])
export default router
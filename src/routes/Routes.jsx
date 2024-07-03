import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";



const router=createBrowserRouter([
     {
          path:'/',
          element:<Layout/>,
          errorElement:<p>ss</p>,
          children:[
               {
                    index:true,
                    element:<Home/>
               }
          ]
     }
]);
export default router;
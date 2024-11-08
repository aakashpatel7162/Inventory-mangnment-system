import { RouterProvider } from "react-router-dom";
import routes from "./Routes";

export default function RouteProvider() {

    return(
        <div>
        <RouterProvider router={routes}/>
  
   
      </div>   
    )

}
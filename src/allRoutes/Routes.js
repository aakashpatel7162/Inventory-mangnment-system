
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import { paths } from "./paths";
  import Layout from "../Layout/Layout"; 
  import AllInventory from "../pages/Inventorys/AllInventory";
  import NewInventory from "../pages/InventoryDetail/NewInventory";
  import ViewInventory from "../pages/InventoryDetail/ViewInventory";
  const allroutes = createRoutesFromElements(
    <>
  
      <Route element={<Layout />}>
      <Route path="/" element={<AllInventory/>}/>
  
        <Route path={paths.new_inventory} element={<NewInventory />} />
        <Route path={paths.view_inventory} element={<ViewInventory />} />
    
  
      </Route>
    </>
  );
  
  const routes = createBrowserRouter(allroutes);
  export default routes;
  
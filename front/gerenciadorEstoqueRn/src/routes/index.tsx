import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import ProductPage from "../pages/Product";

export default function AppRoutes(){


return(
<Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />


</Routes>




)




}